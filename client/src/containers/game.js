import React, {useState, useEffect} from 'react';
import GameBoard from '../components/GameBoard';
import Players from '../components/Players'

const Game = () => {

    const [tasks, setTasks] = useState([])
    const [users, setUsers] = useState([])
    const [roll, setRoll] = useState(0)
    const [playerCounter, setPlayerCounter] = useState(0)
    const [livePlayer, setLivePlayer] = useState({}) //make this as state
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

    useEffect(() => {
        startGame()
    })

    const startGame = () => {
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
    }
    
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

    const updatePlayer = () => {
        console.log(livePlayer.xAxis)
        livePlayer.xAxis = board[roll].xAxis
        livePlayer.yAxis = board[roll].yAxis
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

    // const getTasks = () => {
    //     fetch('http://localhost:5000/tasks')
    //         .then(res => res.json())
    //         .then(tasks => setTasks(tasks))
    // }

    // const postUser = (data) => {
    //     return fetch('http://localhost:5000/USERS', {
    //         method: 'POST',
    //         body: JSON.stringify(data),
    //         headers: { 'Content-Type': 'application/json' }
    //     })
    //     .then(res => res.json())
    // }

    const addUser = (user) => {
        const tempUser = users.map(user => user);
        tempUser.push(user);
        setUsers(tempUser);
    }



    return(
        <>
            <div>
                <button onClick={rollDice} >Roll Dice</button>
            </div>
            <div>
                <GameBoard board={board} />
                <Players players={players}/>
            </div>
            
            {/* <p>Player rolls a: {playerRoll}</p> */}
        </>
    )

}

export default Game;