import React, { useRef, useEffect } from "react";
import Paper from 'paper';
import Sketch from './Sketch';

const Canvas = props => {
    const canvasRef = useRef(null)

    useEffect(() => {
        const canvas = canvasRef.current;
        Paper.setup(canvas);
        Sketch();
    }, [])

    function logCanvas () {
        let canvas = document.getElementById('paper-canvas');
        let savedDrawing = canvas.toDataURL();
        canvas.src = savedDrawing;

        console.log(savedDrawing);
        return savedDrawing;
    }
    
        return(
            <div>
                <canvas ref={canvasRef} {...props} id='paper-canvas'  height="200" width="400" resize='true' />

                <button onClick={logCanvas}>Click here to console log canvas ref</button>
            </div>
        )
    
}

export default Canvas;