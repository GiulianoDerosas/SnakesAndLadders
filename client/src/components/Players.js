import Canvas from "./Canvas"

const Players = ({players}) => {
    

    const drawPlayers = ctx => {

        players.forEach(player => {
            ctx.clearRect(0, 0, 750, 750);
            ctx.fillStyle = '#ff0000'
            ctx.beginPath()
            ctx.arc(player.xAxis + 40, player.yAxis + 32.5, 25, 0, 2 * Math.PI)
            ctx.stroke()
            ctx.fillStyle = '#1e81b0'
            ctx.fill()
        })
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