import React, { useRef, useEffect, useContext } from "react";
import Context from "../utils/Context";
import Paper from 'paper';
import Sketch from './Sketch';
import API from '../utils/API';

const Canvas = props => {
    const [context, setContext] = useContext(Context);
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

        let user = context.username;

        API.savedPost({image, user})
            .then(res => console.log("success"))
            .catch(err => console.log(err));
    };



return (
    <div className="container">
        <div className="row">
            <div className="text-center">
                <canvas ref={canvasRef} {...props} id='paper-canvas' height="200" width="400" resize='true' />
                <button className="btn btn-secondary">Change Color</button>
                <button className="btn btn-primary" onClick={logCanvas}>Save your Drawing</button>
            </div>
        </div>
    </div>
)
    
}

export default Canvas;