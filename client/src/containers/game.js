import React, { useState, useEffect } from 'react';
import GameBoard from '../components/GameBoard';
import Players from '../components/Players';
import Dice from '../components/Dice';
import PlayerForm from '../components/PlayerForm';
import PlayerList from '../components/PlayerList';
import GameService from '../services/GameService';
import Tasks from '../components/Tasks';

const Game = () => {
    const [tasks, setTasks] = useState([])
    const [users, setUsers] = useState([])
    const [players, setPlayers] = useState([])
    const [roll, setRoll] = useState(0)
    const [playerCounter, setPlayerCounter] = useState(0)
    const [livePlayer, setLivePlayer] = useState({})
    const [randomTask, setRandomTask] = useState(null)
    
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

    // const startGame = () => {

    //     const initPlayers = []

    //     let player_1 = {
    //         xAxis: board[roll].xAxis,
    //         yAxis: board[roll].yAxis,
    //         index: 1 
    //     }
    //     initPlayers.push(player_1)

    //     let player_2 = {
    //         xAxis: board[roll].xAxis,
    //         yAxis: board[roll].yAxis,
    //         index: 2
    //     }
    //     initPlayers.push(player_2)

    //     let player_3 = {
    //         xAxis: board[roll].xAxis,
    //         yAxis: board[roll].yAxis,
    //         index: 3
    //     }
    //     initPlayers.push(player_3)

    //     let player_4 = {
    //         xAxis: board[roll].xAxis,
    //         yAxis: board[roll].yAxis,
    //         index: 4
    //     }
    //     initPlayers.push(player_4)
    //     setPlayers(initPlayers)
    // }



    const rollDice = () => {
        setLivePlayer(players[playerCounter])
        const max = 6
        let updateRoll = roll
        let newroll = Math.ceil(Math.random() * max);

        // add if statement to stop player going past square 100

        updateRoll += newroll
        setRoll(updateRoll)
        updatePlayer()
        changePlayer()
    }

    const getRandomTask = () => {
        if (tasks.length > 0) {
            const max = tasks.length
            const randomNumber = Math.floor(Math.random() * max);
            console.log(tasks[randomNumber].task)
            const task = tasks[randomNumber].task
            setRandomTask(task)
            return task
        }
    }
    // conditional on index position. if even or odd / % 0 or not

    const updatePlayer = () => {
        console.log(livePlayer.xAxis)
        let tempPlayer = livePlayer
        tempPlayer.xAxis = board[roll].xAxis
        tempPlayer.yAxis = board[roll].yAxis
        setLivePlayer(tempPlayer)
    }

    const changePlayer = () => {
        let counter = playerCounter
        if (counter === 3) {
            counter = 0
            setPlayerCounter(counter)
        } else {
            counter += 1
            setPlayerCounter(counter)
        }
        setLivePlayer(players[playerCounter])
    }

    const addPlayer = (newPlayer) =>{
        const temp = players.map(player => player);
        temp.push(newPlayer);
        setPlayers(temp);
        // console.log(players);
      }

    //   const getTasks = () => {
    //     fetch('http://localhost:5000/tasks')
    //         .then(res => res.json())
    //         .then(tasks => setTasks(tasks))
    // }

    // console.log(players)
    // console.log(board)

    useEffect(() => {
        GameService.getTasks()
        .then(tasks => setTasks(tasks))
        }, []
    )

    console.log('tasks:', tasks)

    return (
        <>
            <div>
                <GameBoard board={board} />
                {/* <Players players={players} /> */}
            </div>
            
            <div className="under-board">
                <div className="left-box">
                <Dice/>
                </div>

                <div className="right-box">
                <PlayerForm addPlayer={addPlayer}/>
                </div>
            </div>

            <div>
            <PlayerList players={players}/>
            </div>
            <div>
                {/* <Tasks tasks={tasks} getRandomTask={getRandomTask}/> */}
                <button onClick={getRandomTask}>Click me</button>
                {/* <p>{randomTask}</p> */}
                <Tasks randomTask={randomTask} />
            </div>
        </>
    )

}

export default Game;

// for (let index = 1; index < 4; index ++){
//     initPlayers.push({xAxis, yAxis, index})
//     xAxis = board[roll].xAxis
//     yAxis = board[roll].yAxis
// }