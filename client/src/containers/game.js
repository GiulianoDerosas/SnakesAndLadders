import React, { useState, useEffect } from 'react';
import GameBoard from '../components/GameBoard';
import Players from '../components/Players';
import Dice from '../components/Dice';
import PlayerForm from '../components/PlayerForm';
import PlayerList from '../components/PlayerList';
import RuleDisplay from '../components/RuleDisplay';
import GameService from '../services/GameService';
import Tasks from '../components/Tasks';

const Game = () => {
    const [tasks, setTasks] = useState([])
    const [players, setPlayers] = useState([])
    const [currentPlayerIndex, setCurrentPlayerIndex] = useState(0)
    const [livePlayer, setLivePlayer] = useState({})
    const [randomTask, setRandomTask] = useState(null)
    const [refresh, setRefresh] = useState(0)
    
    const boardSize = 750;
    const tiles = 10;
    const tileSize = 75;
    let yAxis = (tiles - 1) * tileSize;
    let xAxis = 0;
    let board = [];
    let direction = 1;

    for (let index = 0; index < tiles * tiles; index++) {
        // add each tile to the array
        board.push({ xAxis, yAxis, tileSize, index });
        xAxis = xAxis + tileSize * direction;
        // reverse direction after 10th tile and move up 1 tile
        if (xAxis >= boardSize || xAxis <= -tileSize) {
            direction *= -1;
            xAxis += tileSize * direction;
            yAxis -= tileSize
        }
    }

    const addPlayer = newPlayer => {

        let tempArray = players
        players.push(newPlayer)
        setPlayers(tempArray)
        setLivePlayer(players[0])
        let update = refresh + 1
        setRefresh(update)
    }

    const getRoll = (newRoll) => {
        if(players.length){
            setLivePlayer(players[currentPlayerIndex])
            updatePlayer(newRoll)
        }
    }

    const getRandomTask = () => {
        if (tasks.length > 0) {
            const max = tasks.length
            const randomNumber = Math.floor(Math.random() * max);
            const task = tasks[randomNumber].task
            setRandomTask(task)
            return task
        }
    }

    const updatePlayer = (newRoll) => {
        let tempPlayer = livePlayer
        let tempPlayers = players
        
        let newPosition = tempPlayer.currentSquare + newRoll
        if (newPosition < 99 ) {
            tempPlayer.xAxis = board[newPosition].xAxis
            tempPlayer.yAxis = board[newPosition].yAxis
            tempPlayer.currentSquare = newPosition
        } else if (newPosition > 99) {
            let remainder = newPosition - 99
            tempPlayer.xAxis = board[99 - remainder].xAxis
            tempPlayer.yAxis = board[99 - remainder].yAxis 
            tempPlayer.currentSquare = 99 - remainder
         
        } else if (newPosition === 99) {
            console.log("removing player for win condition")
            tempPlayers.splice(currentPlayerIndex, 1)
        }
        
        let nextPlayerIndex = currentPlayerIndex
        if (nextPlayerIndex + 1 === players.length) {
            nextPlayerIndex = 0
            // setCurrentPlayerIndex(nextPlayerIndex)
        } else {
            nextPlayerIndex += 1
            // setCurrentPlayerIndex(nextPlayerIndex)
        }
        let update = refresh + 1
        setRefresh(update)
        setLivePlayer(players[nextPlayerIndex])
        setCurrentPlayerIndex(nextPlayerIndex)
    }

    useEffect(() => {
        GameService.getTasks()
        .then(tasks => setTasks(tasks))
        }, []
    )
        console.log(players)
    return (
        <React.Fragment>
        <div className="main-wrapper">

            <div><PlayerForm addPlayer={addPlayer}/></div>


            <div className="board"><GameBoard board={board} />
            <Players players={players}/></div>

            <div className="dice-container"><Dice getRoll = {getRoll}/>
            <RuleDisplay className="nes-btn is-success" /></div>
        </div>

        <div className="task-button-container">
            {/* <Tasks tasks={tasks} getRandomTask={getRandomTask}/> */}
            <button className="task-button" onClick={getRandomTask}>Click me</button>
        </div>

        <div className="task-button-container"><Tasks randomTask={randomTask}/></div>

        <div>
            {/* <Actions randomAction={randomAction} /> */}
        </div>
        </React.Fragment>
    )

}

export default Game;