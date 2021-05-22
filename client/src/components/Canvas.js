import React, { useRef, useEffect } from 'react'

const Canvas = () => {

    const width = 500;
    const height = 500;
    const numCol = 10;
    const numRow = 10;
    const tileSize = 50;
    let yAxis = (numRow - 1) * tileSize;
    let xAxis = 0;
    let board = [];
    let direction = 1;
    const canvasRef = useRef([])

    const drawBoard = ctx => {
        for (let index = 0; index < numRow * numRow; index++) {
            // add each tile to the array
            board.push({ xAxis, yAxis, tileSize, index });
            xAxis = xAxis + tileSize * direction;
            // reverse direction after 10th tile and move up 1 tile
            if (xAxis >= width || xAxis <= -tileSize) {
                direction *= -1;
                xAxis += tileSize * direction;
                yAxis -= tileSize
            }

            board.forEach(tile => {
                ctx.fillStyle = '#ebebeb'
                ctx.beginPath()
                ctx.strokeRect(tile.xAxis, tile.yAxis, tile.tileSize, tile.tileSize)
                ctx.fill()
                ctx.font = "20px Arial";
                ctx.strokeText(`${tile.index + 1}`, tile.xAxis, tile.yAxis + 50);
                // if (tile.occupied) 
            })

            
        }
    }


    useEffect(() => {
        const canvas = canvasRef.current
        const context = canvas.getContext('2d')
        //Our first draw
        drawBoard(context)
        // context.fillStyle = '#ebebeb'
        // context.fillRect(0, 0, context.canvas.width, context.canvas.height)
    }, [drawBoard])

    return <canvas width="500" height="500" ref={canvasRef} />
}

export default Canvas