import Canvas from "./Canvas"

const GameBoard = ({ board, ladders }) => {

    const drawBoard = ctx => {

        board.forEach(tile => {
            ctx.fillStyle = '#ebebeb'
            ctx.beginPath()
            ctx.strokeRect(tile.xAxis, tile.yAxis, tile.tileSize, tile.tileSize)
            ctx.fill()
            ctx.font = "15px Arial";
            ctx.strokeText(`${tile.index + 1}`, tile.xAxis, tile.yAxis + 75);
        })

        ladders.forEach(ladder => {
            ctx.beginPath();
            ctx.moveTo(ladder.startxAxis + 32.5, ladder.startyAxis- 35)
            ctx.lineTo(ladder.endxAxis + 32.5 , ladder.endyAxis - 35)
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