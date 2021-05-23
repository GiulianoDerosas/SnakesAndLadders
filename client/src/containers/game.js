import React, {useState, useEffect} from 'react';
import GameBoard from '../components/GameBoard';
import Players from '../components/Players'

const Game = () => {

    const [tasks, setTasks] = useState([])
    const [users, setUsers] = useState([])
    const [roll, setRoll] = useState(0)
    const [currentPlayer, setCurrentPlayer] = useState(0)
    // const [playerRoll, setPlayerRoll] = useState();

    const boardSize = 750;
    const tiles = 10;
    const tileSize = 75;
    let yAxis = (tiles - 1) * tileSize;
    let xAxis = 0;
    let board = [];
    let direction = 1;
    let players = []
    
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
    let player_1 = {
        xAxis: board[roll].xAxis,
        yAxis: board[roll].yAxis,
        index: 1 
    }
    players.push(player_1)

    let player_2 = {
        xAxis: board[roll].xAxis,
        yAxis: board[roll].yAxis,
        index: 2
    }
    players.push(player_2)

    let player_3 = {
        xAxis: board[roll].xAxis,
        yAxis: board[roll].yAxis,
        index: 3
    }
    players.push(player_3)

    let player_4 = {
        xAxis: board[roll].xAxis,
        yAxis: board[roll].yAxis,
        index: 4
    }
    players.push(player_4)
    
    const rollDice = () => {
        const max = 6
        let updateRoll = roll
        let playerCounter = currentPlayer
        let newroll = Math.ceil(Math.random() * max);
        updateRoll += newroll
        setRoll(updateRoll)
        updatePlayer(players[currentPlayer])
        if (playerCounter === 3) {
            playerCounter = 0
            setCurrentPlayer(playerCounter)
        } else {
            playerCounter += 1
            setCurrentPlayer(playerCounter)
        }
    }

    const updatePlayer = (player) => {
        console.log(player)
        player.xAxis = board[roll].xAxis
        player.yAxis = board[roll].yAxis
    }
    
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
            {/* <p>Player rolls a: {playerRoll}</p> */}
        </>
    )

}

export default Game;