import React, { useState, useEffect } from 'react';
import GameBoard from '../components/GameBoard';
import Players from '../components/Players';
import Dice from '../components/Dice';
import PlayerForm from '../components/PlayerForm';
import PlayerList from '../components/PlayerList';
<<<<<<< HEAD
import RuleDisplay from '../components/RuleDisplay';
=======
import GameService from '../services/GameService';
import Tasks from '../components/Tasks';
>>>>>>> 9a72485adc35e6f7c4d55e9357c0ff45fe95b868

const Game = () => {
    const [tasks, setTasks] = useState([])
    const [players, setPlayers] = useState([])
    const [playerCounter, setPlayerCounter] = useState(0)
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
        updatePlayer(newRoll)
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
        console.log(tempPlayer)
        let newPosition = tempPlayer.currentSquare + newRoll
        tempPlayer.xAxis = board[newPosition].xAxis
        tempPlayer.yAxis = board[newPosition].yAxis
        tempPlayer.currentSquare = newPosition
        setLivePlayer(tempPlayer)
        let update = refresh + 1
        setRefresh(update)
        let counter = playerCounter
        if (counter + 1 === players.length) {
            counter = 0
            setPlayerCounter(counter)
        } else {
            counter += 1
            setPlayerCounter(counter)
        }
        setLivePlayer(players[playerCounter])
    }

    useEffect(() => {
        GameService.getTasks()
        .then(tasks => setTasks(tasks))
        }, []
    )

    return (
        <>
        <div className="main-wrapper">

            <div><PlayerForm addPlayer={addPlayer}/></div>


            <div className="board"><GameBoard board={board} />
            <Players players={players}/></div>

            <div className="dice-container"><Dice getRoll = {getRoll}/>
            <button className="nes-btn is-success">Rules</button></div>
        </div>

        <div className="task-button-container">
            {/* <Tasks tasks={tasks} getRandomTask={getRandomTask}/> */}
            <button className="task-button" onClick={getRandomTask}>Click me</button>
        </div>

        <div className="task-button-container"><Tasks randomTask={randomTask}/></div>

        <div>
            {/* <Actions randomAction={randomAction} /> */}
        </div>
        </>
    )

}

export default Game;