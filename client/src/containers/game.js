import React, { useState, useEffect } from 'react';
import GameBoard from '../components/GameBoard';
import Players from '../components/Players';
import Dice from '../components/Dice';
import PlayerForm from '../components/PlayerForm';
import RuleDisplay from '../components/RuleDisplay';
import GameService from '../services/GameService';
import Tasks from '../components/Tasks';

const Game = () => {
    const [tasks, setTasks] = useState([])
    const [players, setPlayers] = useState([])
    const [currentPlayerIndex, setCurrentPlayerIndex] = useState(0)
    const [livePlayer, setLivePlayer] = useState({})
    const [previousPlayer, setPreviousPlayer] = useState({})
    const [randomTask, setRandomTask] = useState([])
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
        {start: 9, startxAxis: board[9].xAxis, startyAxis: board[9].yAxis, end: 30, endxAxis: board[30].xAxis, endyAxis: board[30].yAxis},
        {start: 35, startxAxis: board[35].xAxis, startyAxis: board[35].yAxis, end: 61, endxAxis: board[61].xAxis, endyAxis: board[61].yAxis},
        {start: 65, startxAxis: board[65].xAxis, startyAxis: board[65].yAxis, end: 73, endxAxis: board[73].xAxis, endyAxis: board[73].yAxis},
        {start: 71, startxAxis: board[71].xAxis, startyAxis: board[71].yAxis, end: 94, endxAxis: board[94].xAxis, endyAxis: board[94].yAxis},
    ]

    let checkLadders = (tempPlayer) => {
        ladders.forEach((ladder) => {
            if (ladder.start  === tempPlayer.currentSquare ) {
                tempPlayer.xAxis = ladder.endxAxis
                tempPlayer.yAxis = ladder.endyAxis
                tempPlayer.currentSquare = ladder.end
<<<<<<< HEAD
=======
                console.log("ladder hit!")
                getLadder()
>>>>>>> 877aeb8be191be3ae0b4c7fed0d5a6c0d43c2e08
                let update = refresh + 1
                setRefresh(update)
            }
        })    
    }
    
    const snakes = [
        {start: 22, startxAxis: board[22].xAxis, startyAxis: board[22].yAxis, end: 5, endxAxis: board[5].xAxis, endyAxis: board[5].yAxis},
        {start: 70, startxAxis: board[70].xAxis, startyAxis: board[70].yAxis, end: 33, endxAxis: board[33].xAxis, endyAxis: board[33].yAxis},
        {start: 82, startxAxis: board[82].xAxis, startyAxis: board[82].yAxis, end: 62, endxAxis: board[62].xAxis, endyAxis: board[62].yAxis},
        {start: 98, startxAxis: board[98].xAxis, startyAxis: board[98].yAxis, end: 0, endxAxis: board[0].xAxis, endyAxis: board[0].yAxis}
    ]

    let checkSnakes = (tempPlayer) => {
        snakes.forEach((snake) => {
            if (snake.start  === tempPlayer.currentSquare ) {
                tempPlayer.xAxis = snake.endxAxis
                tempPlayer.yAxis = snake.endyAxis
                tempPlayer.currentSquare = snake.end
                console.log("snake bite!")
                getSnake()
                let update = refresh + 1
                setRefresh(update)
            }
        })    
    }

    const drinks = [3, 8, 16, 19, 28, 45, 46, 47, 58, 68, 75, 76, 81, 85, 89, 93, 97]

    const punishments = [2, 6, 13, 24, 36, 39, 49, 56, 60, 64, 69, 77, 83, 91, 92, 96]

    const addPlayer = newPlayer => {

        let tempArray = players
        players.push(newPlayer)
        setPlayers(tempArray)
        setLivePlayer(players[0])
        let update = refresh + 1
        setRefresh(update)
    }

    const getRoll = (newRoll) => {
        if(players.length ){
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

    const checkForEnd = (array) => {
        if (array.length > 0) {
            window.alert(`${array[0].name} won! Congratulations! The game will now reset, hope you had fun and are still standing`)
            refreshPage()
        } 
    }

    const getNoTask = () => {
        setRandomTask(" got away with it this time!")
        setRandomAction("")
    }

    const getLadder = () => {
        setRandomTask(" found a ladder!")
        setRandomAction("")
    }
    
    const getSnake = () => {
        setRandomTask(" 0 - snake 1")
        setRandomAction("")
    }

<<<<<<< HEAD
    const triggerSquare = () => {
=======
    const triggerSquare = (newRoll) => {
        console.log(livePlayer.currentSquare)
>>>>>>> 877aeb8be191be3ae0b4c7fed0d5a6c0d43c2e08
        if (drinks.includes(livePlayer.currentSquare)) {
            return getRandomTask()
        } else if (punishments.includes(livePlayer.currentSquare)) {
            return getRandomAction()
        } else {
            return getNoTask()
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
            let winner = tempPlayers.splice(currentPlayerIndex, 1)
            checkForEnd(winner)
        }
        checkLadders(tempPlayer)
        checkSnakes(tempPlayer)
        triggerSquare()
        let nextPlayerIndex = currentPlayerIndex
        let previousPlayerIndex = currentPlayerIndex - 1
        if (nextPlayerIndex + 1 === players.length) {
            nextPlayerIndex = 0
            previousPlayerIndex = players.length - 1
        } else {
            nextPlayerIndex += 1
            previousPlayerIndex = nextPlayerIndex - 1
        }
        let update = refresh + 1
        setRefresh(update)
        setLivePlayer(players[nextPlayerIndex])
        setPreviousPlayer(players[previousPlayerIndex])
        setCurrentPlayerIndex(nextPlayerIndex)
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
        <React.Fragment>
        <header className="header">

        <img className="logo-2" src="https://i.ibb.co/MDwn8vD/Snake.png" alt="Snake" border="0"/>
        <h1>SNAKES & BLADDERED</h1>
        <img className="logo" src="https://i.ibb.co/k1fsMPT/Icon-Color-11.png" alt="Icon-Color-11" border="0"/>
        </header>

        <div className="main-wrapper">
        
            <div className="form-container">
                <PlayerForm addPlayer={addPlayer}/><br></br>
                <RuleDisplay />
            </div>
            
            <div className="board">
                <GameBoard board={board} ladders={ladders} snakes={snakes} />
                <Players players={players}/>
            </div>

            <div className="dice-container">
                <Dice getRoll = {getRoll}/>
                <br />
                <button className="nes-btn is-warning" onClick={refreshPage}>New Game</button>
                <br />
                
            </div>
        </div>
        <br />
        <div 
        className="task-button-container"><Tasks livePlayer={livePlayer} previousPlayer={previousPlayer} randomTask={randomTask} randomAction={randomAction}/>
        </div>
        </React.Fragment>
    )

}

export default Game;