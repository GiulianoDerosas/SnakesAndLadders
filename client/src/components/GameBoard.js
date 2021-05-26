import React, { useEffect, useRef } from "react"
import Canvas from "./Canvas"

const GameBoard = ({ board, ladders, snakes }) => {

    const drawBoard = ctx => {

        board.forEach(tile => {
            ctx.fillStyle = '#ebebeb'
            ctx.beginPath()
            ctx.strokeStyle = '#000000'
            ctx.strokeRect(tile.xAxis, tile.yAxis, tile.tileSize, tile.tileSize)
            ctx.fill()
            ctx.font = "15px Arial";
            ctx.strokeText(`${tile.index + 1}`, tile.xAxis, tile.yAxis + 75);
        })

        ladders.forEach(ladder => {
            ctx.beginPath();
            ctx.moveTo(ladder.startxAxis, ladder.startyAxis)
            ctx.lineTo(ladder.endxAxis, ladder.endyAxis)
            ctx.strokeStyle = '#50D326'
            ctx.stroke()
            ctx.closePath();
        })

        snakes.forEach(snake => {
            ctx.beginPath();
            ctx.moveTo(snake.startxAxis + 35, snake.startyAxis + 35)
            ctx.lineTo(snake.endxAxis + 35, snake.endyAxis + 35)
            ctx.strokeStyle = '#ff0000'
            ctx.stroke()
            ctx.closePath();
        })
    }     

    let drawItem = drawBoard

    return (
        <Canvas drawItem={drawItem} />
    )
}

export default GameBoard;