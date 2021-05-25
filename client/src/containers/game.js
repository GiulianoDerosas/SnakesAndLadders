import React, { useState, useEffect } from 'react';
import GameBoard from '../components/GameBoard';
import Players from '../components/Players';
import Dice from '../components/Dice';
import PlayerForm from '../components/PlayerForm';
import GameService from '../services/GameService';
import Tasks from '../components/Tasks';

const Game = () => {
    const [tasks, setTasks] = useState([])
    const [players, setPlayers] = useState([])
    const [playerCounter, setPlayerCounter] = useState(0)
    const [livePlayer, setLivePlayer] = useState({})
    const [randomTask, setRandomTask] = useState(null)
    const [actions, setActions] = useState([])
    const [randomAction, setRandomAction] = useState(null)
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

    const ladders = [
        {start: 10, startxAxis: 710, startyAxis: 710, end: 31, endxAxis: 710, endyAxis: 485},
        {start: 36, startxAxis: 335, startyAxis: 485, end: 62, endxAxis: 110, endyAxis: 260},
        {start: 66, startxAxis: 410, startyAxis: 260, end: 74, endxAxis: 485, endyAxis: 185},
        {start: 70, startxAxis: 710, startyAxis: 260, end: 94, endxAxs: 485, endyAxis: 35}
    ]

    const snakes = [
        {start: 23, startxAxis: board[22].xAxis, startyAxis: board[22].yAxis, end: 6, endxAxis: board[5].xAxis, endyAxis: board[5].yAxis},
        {start: 71, startxAxis: board[70].xAxis, startyAxis: board[70].yAxis, end: 34, endxAxis: board[33].xAxis, endyAxis: board[33].yAxis},
        {start: 83, startxAxis: board[82].xAxis, startyAxis: board[82].yAxis, end: 59, endxAxis: board[58].xAxis, endyAxis: board[58].yAxis},
        {start: 99, startxAxis: board[98].xAxis, startyAxis: board[98].yAxis, end: 1, endxAxis: board[0].xAxis, endyAxis: board[0].yAxis}
    ]

    const drinks = [3, 8, 16, 19, 28, 45, 46, 47, 58, 68, 75, 76, 81, 85, 89, 93, 97]

    const punishments = [2, 5, 13, 24, 35, 39, 49, 50, 56, 60, 64, 69, 77, 86, 90, 92, 96]

    console.log(board)

    const addPlayer = newPlayer => {

        let tempArray = players
        players.push(newPlayer)
        setPlayers(tempArray)
        setLivePlayer(players[0])
        let update = refresh + 1
        setRefresh(update)
    }

    const getRoll = (newRoll) => {
        setLivePlayer(players[playerCounter])
        updatePlayer(newRoll)
    }

    const getRandomTask = () => {
        if (tasks.length > 0) {
            const max = tasks.length
            const randomNumber = Math.floor(Math.random() * max);
            const task = tasks[randomNumber].task
            setRandomTask(task)
            setRandomAction("")
            return task
        }
    }

    const getRandomAction = () => {
        if (actions.length > 0) {
            const max = actions.length
            const randomNumber = Math.floor(Math.random() * max);
            const action = actions[randomNumber].action
            setRandomAction(action)
            setRandomTask("")
            return action
        }
    }

    const getNoTask = () => {
        setRandomTask("")
        setRandomAction("")
        return ("")
    }

    const updatePlayer = (newRoll) => {
        let tempPlayer = livePlayer
        console.log(tempPlayer)
        let newPosition = tempPlayer.currentSquare + newRoll
        tempPlayer.xAxis = board[newPosition].xAxis
        tempPlayer.yAxis = board[newPosition].yAxis
        tempPlayer.currentSquare = newPosition
        let counter = playerCounter
        if (counter + 1 === players.length) {
            counter = 0
        } else {
            counter += 1
        }
        let update = refresh + 1
        setRefresh(update)
        setLivePlayer(players[counter])
        setPlayerCounter(counter)
    }

    useEffect(() => {
        GameService.getTasks()
        .then(tasks => setTasks(tasks))
        }, []
    )

    useEffect(() => {
        GameService.getActions()
        .then(actions => setActions(actions))
        }, []
    )

    console.log(players);

    return (
        <>

        <header className="header">

        {/* <img className="logo-2" src="https://i.ibb.co/Vthqc8f/50-Animals-avatar-12.png" alt="50-Animals-avatar-12" border="0"/> */}
        <img className="logo-2" src="https://i.ibb.co/MDwn8vD/Snake.png" alt="Snake" border="0"/>
        <h1>SNAKES & BLADDERED</h1>
        <img className="logo" src="https://i.ibb.co/k1fsMPT/Icon-Color-11.png" alt="Icon-Color-11" border="0"/>
        </header>
        <div className="main-wrapper">
        

            <div className="dice-container">
                <PlayerForm addPlayer={addPlayer}/><br></br>
                {players.name}
            </div>
            
            <div className="board">
            <GameBoard board={board} ladders={ladders} snakes={snakes} />
            <Players players={players}/>
            </div>

            <div className="dice-container">
                <Dice livePlayer={livePlayer} getRoll = {getRoll}/>
                
                <div className="livePlayer">{livePlayer.name}'s Roll</div>
            </div>
            {/* <button>Refresh</button> */}
        </div>

        <div className="task-button-container">
            {/* <Tasks tasks={tasks} getRandomTask={getRandomTask}/> */}
            <button className="task-button" onClick={getRandomTask}>Click me: Task</button>
            <button className="task-button" onClick={getRandomAction}>Click me: Action</button>
            <button className="task-button" onClick={getNoTask}>Click me: Empty Square</button>
        </div>

        <div 
        className="task-button-container"><Tasks randomTask={randomTask} randomAction={randomAction}/>
        </div>
        </>
    )

}

export default Game;