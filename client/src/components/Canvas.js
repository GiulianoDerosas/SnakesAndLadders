import React, { useRef, useEffect } from 'react'
import drawBoard from "./GameBoard"

const Canvas = ({board}) => {
    const canvasRef = useRef([])

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

    useEffect(() => {
        const canvas = canvasRef.current
        const context = canvas.getContext('2d')
        //Our first draw
        drawBoard(context)
        // context.fillStyle = '#ebebeb'
        // context.fillRect(0, 0, context.canvas.width, context.canvas.height)
    }, [drawBoard])

    return <canvas width="750" height="750" ref={canvasRef} />
}

export default Canvas