import React, {useEffect, useRef} from 'react'

const GameBoard = () => {

    const width = 500;
    const height = 500;
    const numCol = 10;
    const numRow = 10;
    const tileSize = 50;
    let yAxis = (numRow -1 ) * tileSize;
    let xAxis = 0;
    let board = [];
    let direction = 1;

    useEffect(()=> {
    })
    for (let index = 0; index < numRow * numRow; index++) {
        // add each tile to the array
        board.push({xAxis, yAxis, tileSize, index});
        xAxis = xAxis + tileSize * direction;
        // reverse direction after 10th tile and move up 1 tile
        if (xAxis >= width || xAxis <= -tileSize) {
            direction*= -1;
            xAxis += tileSize * direction;
            yAxis -= tileSize
        }
    }
    console.log(board);


    return (
        <>
        <p></p>
        </>
    )
}
export default GameBoard;