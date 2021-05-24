import { useEffect, useRef } from "react"
import Canvas from "./Canvas"

const GameBoard = ({board}) => {

    const drawBoard = ctx => {

        board.forEach(tile => {
            ctx.fillStyle = '#ebebeb'
            ctx.beginPath()
            ctx.strokeRect(tile.xAxis, tile.yAxis, tile.tileSize, tile.tileSize)
            ctx.fill()
            ctx.font = "15px Arial";
            ctx.strokeText(`${tile.index + 1}`, tile.xAxis, tile.yAxis + 75);
            // if (tile.occupied) 
        })
    }

    let drawItem = drawBoard

    return (

        <Canvas drawItem={drawItem} />
    )
}

export default GameBoard;