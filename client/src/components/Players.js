import Canvas from "./Canvas"

const Players = ({players}) => {
    

    const drawPlayers = ctx => {

        if (players.length > 0 ) {

            console.log(players)

            ctx.clearRect(0, 0, 750, 750);
            
            ctx.beginPath()
            ctx.fillStyle = '#ff0000'
            ctx.arc(players[0].xAxis + 15, players[0].yAxis + 15, 10, 0, 2 * Math.PI)
            ctx.stroke()
            ctx.fillStyle = '#0099ff'
            ctx.fill()
            ctx.closePath()

            ctx.beginPath()
            ctx.fillStyle = '#ff0000'
            ctx.arc(players[1].xAxis + 60, players[1].yAxis + 15, 10, 0, 2 * Math.PI)
            ctx.stroke()
            ctx.fillStyle = '#ffcc00'
            ctx.fill()
            ctx.closePath()

            ctx.beginPath()
            ctx.fillStyle = '#ff0000'
            ctx.arc(players[2].xAxis + 15, players[2].yAxis + 60, 10, 0, 2 * Math.PI)
            ctx.stroke()
            ctx.fillStyle = '#00cc00'
            ctx.fill()
            ctx.closePath()
            
            ctx.beginPath()
            ctx.fillStyle = '#ff0000'
            ctx.arc(players[3].xAxis + 60, players[3].yAxis + 60, 10, 0, 2 * Math.PI)
            ctx.stroke()
            ctx.fillStyle = '#cc00ff'
            ctx.fill()
            ctx.closePath()
        } else {
            ctx.clearRect(0, 0, 750, 750);
            ctx.beginPath()
            ctx.fillStyle = 'rgba(255, 255, 255, 0)'
            ctx.closePath()

        }
    }

    // players.filter(player, stuff => index === 1)
    // ctx.clearRect(0, 0, 750, 750);
    // ctx.fillStyle = '#ff0000'
    // ctx.beginPath()
    // ctx.arc(player.xAxis + 40, player.yAxis + 32.5, 25, 0, 2 * Math.PI)
    // ctx.stroke()

    // players.filter(player, stuff => index === 2)
    // ctx.clearRect(0, 0, 750, 750);
    // ctx.fillStyle = '#ff0000'
    // ctx.beginPath()
    // ctx.arc(player.xAxis + 30, player.yAxis + 52.5, 25, 0, 2 * Math.PI)
    // ctx.stroke()

    // etc etc

    let drawItem = drawPlayers

    return (
        <Canvas drawItem={drawItem} />
    )

}

export default Players;