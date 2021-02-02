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
        Sketch('black');
    }, []);

    // Color Options
    function red() {
        Sketch('red')
    }
    function orange() {
        Sketch('orange')
    }
    function yellow() {
        Sketch('yellow')
    }
    function green() {
        Sketch('green')
    }
    function blue() {
        Sketch('blue')
    }
    function purple() {
        Sketch('purple')
    }
    function pink() {
        Sketch('pink')
    }
    function brown() {
        Sketch('brown')
    }
    function black() {
        Sketch('black')
    }
    function white() {
        Sketch('white')
    }


    // Save Image
    function logCanvas() {
        let canvas = document.getElementById('paper-canvas');
        let image = canvas.toDataURL();
        canvas.src = image;

        let user = context.username;
        let text = document.getElementById("textInput").value;

        API.savedPost({image, user, text})
            .then(res => {
                alert("Image saved!");
            })
            .catch(err => console.log(err));
    };



return (
    <div className="container">
        <div className="row">
            <div className="text-center">
                <canvas ref={canvasRef} {...props} id='paper-canvas' height="200" width="400" resize='true' />
                {/* Drawing Tools */}
                <button className="colorButtons" id="red" onClick={red}></button>
                <button className="colorButtons" id="orange" onClick={orange}></button>
                <button className="colorButtons" id="yellow" onClick={yellow}></button>
                <button className="colorButtons" id="green" onClick={green}></button>
                <button className="colorButtons" id="blue" onClick={blue}></button>
                <button className="colorButtons" id="purple" onClick={purple}></button>
                <button className="colorButtons" id="pink" onClick={pink}></button>
                <button className="colorButtons" id="brown" onClick={brown}></button>
                <button className="colorButtons" id="black" onClick={black}></button>
                <button className="colorButtons" id="white" onClick={white}></button>
                <h6>Description</h6>
                <textarea id="textInput"></textarea>
                <button className="btn btn-secondary" onClick={logCanvas}>Save your Drawing</button>
            </div>
        </div>
    </div>
)
    
}

export default Canvas;