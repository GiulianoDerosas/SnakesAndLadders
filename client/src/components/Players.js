import Canvas from "./Canvas"

const Players = () => {
    let players = []

    let player_1 = {xAxis: 0, yAxis: 725, index: 0}
    players.push(player_1)

    const drawPlayers = ctx => {

        players.forEach(player => {
            ctx.clearRect(0, 0, 750, 750);
            ctx.fillStyle = '#ff0000'
            ctx.beginPath()
            ctx.arc(player.xAxis + 255, player.yAxis - 10, 25, 0, 2 * Math.PI)
            ctx.stroke()
        })
    }

    let drawItem = drawPlayers

    return (
        <Canvas drawItem={drawItem} />
    )

}

export default Players;