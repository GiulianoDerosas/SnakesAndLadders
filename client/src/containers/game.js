import React, { useState, useEffect } from 'react';
import GameBoard from '../components/GameBoard';
import Players from '../components/Players';
import Dice from '../components/Dice';
import PlayerForm from '../components/PlayerForm';
import PlayerList from '../components/PlayerList';
import GameService from '../services/GameService';
import Tasks from '../components/Tasks';
import Snakes from '../components/Snakes';
import Ladders from '../components/Ladders';

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
        {start: 10, startxAxis: board[10].xAxis, startyAxis: board[10].yAxis, end: 31, endxAxis: board[31].xAxis, endyAxis: board[31].yAxis},
        {start: 36, startxAxis: board[36].xAxis, startyAxis: board[36].yAxis, end: 62, endxAxis: board[62].xAxis, endyAxis: board[62].yAxis},
        {start: 66, startxAxis: board[66].xAxis, startyAxis: board[66].yAxis, end: 74, endxAxis: board[74].xAxis, endyAxis: board[74].yAxis},
        {start: 70, startxAxis: board[70].xAxis, startyAxis: board[70].yAxis, end: 94, endxAxs: board[94].xAxis,endyAxis: board[94].yAxis}
    ]

    const snakes = [
        {start: 23, startxAxis: board[23].xAxis, startyAxis: board[23].yAxis, end: 6, endxAxis: board[6].xAxis, endyAxis: board[6].yAxis},
        {start: 71, startxAxis: board[71].xAxis, startyAxis: board[71].yAxis, end: 34, endxAxis: board[34].xAxis, endyAxis: board[34].yAxis},
        {start: 83, startxAxis: board[83].xAxis, startyAxis: board[83].yAxis, end: 59, endxAxis: board[59].xAxis, endyAxis: board[59].yAxis},
        {start: 99, startxAxis: board[99].xAxis, startyAxis: board[99].yAxis, end: 1, endxAxis: board[1].xAxis, endyAxis: board[1].yAxis}
    ]

    const drinks = [3, 8, 16, 19, 28, 45, 46, 47, 58, 68, 75, 76, 81, 85, 89, 93, 97]

    const punishments = [2, 5, 13, 24, 35, 39, 49, 50, 56, 60, 64, 69, 77, 86, 90, 92, 96]

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
            setRandomTask(tasks[randomNumber].task)
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

    const refreshPage = () => {
        window.location.reload(false);
    }

    return (
        <>
        <div className="main-wrapper">

            <div><PlayerForm addPlayer={addPlayer}/></div>
            

            <div className="board">
            <GameBoard board={board} ladders={ladders} />
            <Players players={players}/>
            {/* <Ladders ladders={ladders} /> */}
            </div>

            <div className="dice-container"><Dice getRoll = {getRoll}/>
            <button className="nes-btn is-warning" onClick={refreshPage}>New Game</button>
            <button className="nes-btn is-success">Rules</button></div>
        </div>

        <div className="task-button-container">
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