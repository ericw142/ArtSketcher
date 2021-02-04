import React, { useRef, useEffect, useContext } from "react";
import Context from "../utils/Context";
import Paper from 'paper';
import Sketch from './Sketch';
import API from '../utils/API';
import { withRouter } from 'react-router';

const Canvas = props => {
  
    const [context] = useContext(Context);
    const canvasRef = useRef(null)
    let width;

    useEffect(() => {
        const canvas = canvasRef.current;
        Paper.setup(canvas);
        Sketch('black');
    }, []);

    // Color Options
    function red() {
        width = document.getElementById("width").value;
        Sketch('red', width)
    }
    function orange() {
        width = document.getElementById("width").value;
        Sketch('orange', width)
    }
    function yellow() {
        width = document.getElementById("width").value;
        Sketch('yellow', width)
    }
    function green() {
        width = document.getElementById("width").value;
        Sketch('green', width)
    }
    function blue() {
        width = document.getElementById("width").value;
        Sketch('blue', width)
    }
    function purple() {
        width = document.getElementById("width").value;
        Sketch('purple', width)
    }
    function pink() {
        width = document.getElementById("width").value;
        Sketch('pink', width)
    }
    function brown() {
        width = document.getElementById("width").value;
        Sketch('brown', width)
    }
    function black() {
        width = document.getElementById("width").value;
        Sketch('black', width)
    }
    function white() {
        width = document.getElementById("width").value;
        Sketch('white', width)
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
                // props.withRouter.push('/profile');
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
                <input type="range" id="width" min="1" max="30"></input>
                <h6>Description</h6>
                <textarea id="textInput"></textarea>
                <button className="btn btn-primary" onClick={logCanvas} style={{ width : '100px'}}>Save</button>
            </div>
        </div>
    </div>
)
    
}

export default withRouter(Canvas);