import React, { useEffect, useRef } from "react"
import Canvas from "./Canvas"

const GameBoard = ({ board, ladders, snakes }) => {

    const drawBoard = ctx => {

        const myImg = new Image();
        myImg.onload = function() {
        ctx.drawImage(myImg, 0, 0, 750, 750);
        };
        myImg.src = `https://i.ibb.co/XzwfkkJ/desertbackground.png` ;
    }     

    let drawItem = drawBoard

    return (
        <Canvas drawItem={drawItem} />
    )
}

export default GameBoard;