import React, {useState, useEffect} from 'react';
import GameBoard from '../components/GameBoard';
import Players from '../components/Players'

const Game = () => {

    const [tasks, setTasks] = useState([])
    const [users, setUsers] = useState([])
    const [playerRoll, setPlayerRoll] = useState();

    const boardSize = 750;
    const tiles = 10;
    const tileSize = 75;
    let yAxis = (tiles - 1) * tileSize;
    let xAxis = 0;
    let board = [];
    let direction = 1;
    let roll = 0;

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

    console.log(board[10])

    let players = []
    
    const rollDice = () => {
        const max = 6
        let newroll = Math.ceil(Math.random() * max);
        roll += newroll
        console.log(roll)
        console.log(newroll)
        player_1.xAxis = board[roll].xAxis
        player_1.yAxis = board[roll].yAxis
        console.log(player_1.xAxis)
        console.log(player_1.yAxis)
        setPlayerRoll(newroll)
    }

    let player_1 = {
        xAxis: board[roll].xAxis, 
        yAxis: board[roll].yAxis, 
        index: 1
    }
    players.push(player_1)


    useEffect(() => {
        getTasks()
    })

    const getTasks = () => {
        fetch('http://localhost:5000/tasks')
            .then(res => res.json())
            .then(tasks => setTasks(tasks))
    }

    const postUser = (data) => {
        return fetch('http://localhost:5000/USERS', {
            method: 'POST',
            body: JSON.stringify(data),
            headers: { 'Content-Type': 'application/json' }
        })
        .then(res => res.json())
    }

    const addUser = (user) => {
        const tempUser = users.map(user => user);
        tempUser.push(user);
        setUsers(tempUser);
    }



    return(
        <>
            <GameBoard board={board} />
            <button onClick={rollDice} >Roll Dice</button>
            <Players players={players}/>
            <p>Player rolls a: {playerRoll}</p>
        </>
    )

}

export default Game;