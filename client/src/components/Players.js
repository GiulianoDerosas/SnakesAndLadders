import Canvas from "./Canvas"
import React from "react";

const Players = ({players}) => {
    

    const drawPlayers = ctx => {

        if (players.length > 0 ) {

            ctx.clearRect(0, 0, 750, 750);

            players.forEach((player, index) => {
                const yOffset = index <= 1 ? 20 : 55;
                const xOffset = index == 0 || index === 2 ? 20 : 55;
                ctx.beginPath()
                ctx.fillStyle = '#000'
                ctx.arc(players[index].xAxis + xOffset, players[index].yAxis + yOffset, 15, 0, 2 * Math.PI)
                ctx.stroke()
                ctx.fillStyle = player.color
                ctx.fill()
                ctx.closePath()
            })  
        } else {
            ctx.clearRect(0, 0, 750, 750);
            ctx.beginPath()
            ctx.fillStyle = 'rgba(255, 255, 255, 0)'
            ctx.closePath()

        }
    }

    let drawItem = drawPlayers

    return (
        <Canvas drawItem={drawItem} />
    )

}

export default Players;