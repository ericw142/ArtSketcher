import React, { useRef, useEffect } from "react";
import Paper from 'paper';
import Sketch from './Sketch';
import API from '../utils/API';

const Canvas = props => {
    const canvasRef = useRef(null)

    useEffect(() => {
        const canvas = canvasRef.current;
        Paper.setup(canvas);
        Sketch();
    }, [])

    function logCanvas() {
        let canvas = document.getElementById('paper-canvas');
        let image = canvas.toDataURL();
        canvas.src = image;

        console.log (image);

        API.savedPost({image})
            .then(res => console.log("success"))
            .catch(err => console.log(err));
    };



return (
    <div className="container">
        <div className="row">
            <div className="text-center">
                <canvas ref={canvasRef} {...props} id='paper-canvas' height="200" width="400" resize='true' />

                <button className="btn-btn primary" onClick={logCanvas}>Click here to console log canvas ref</button>
            </div>
        </div>
    </div>
)
    
}

export default Canvas;