import React, { useState, useEffect } from 'react';
import GameBoard from '../components/GameBoard';
import Players from '../components/Players';
import Dice from '../components/Dice';
import PlayerForm from '../components/PlayerForm';
import PlayerList from '../components/PlayerList';

const Game = () => {
    const [tasks, setTasks] = useState([])
    const [players, setPlayers] = useState([])
    const [playerCounter, setPlayerCounter] = useState(0)
    const [livePlayer, setLivePlayer] = useState({})
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

    return (
        <>
            <div><Dice getRoll = {getRoll}/></div>

            <div>
                <GameBoard board={board} />
                <Players players={players} />
            </div>

            <div>
                <div className="left-box">
                <PlayerForm addPlayer={addPlayer}/>
                </div>
            </div>
        </>
    )

}

export default Game;