import React, { useRef, useEffect } from 'react'

const Canvas = ({drawItem}) => {
    const canvasRef = useRef([])

    

    useEffect(() => {
        const canvas = canvasRef.current
        const context = canvas.getContext('2d')
        //Our first draw
        drawItem(context)
    }, [drawItem])

    return <canvas className="canvas" width="750" height="750" ref={canvasRef}/>
}

export default Canvas
// width="750" height="750" 