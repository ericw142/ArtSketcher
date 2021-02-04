import React from "react";

function Post(props) {
    return(
        
        <div className="col-md-7">  
        <div className="card post text-center">
            <img src={props.image}></img>
            <hr/>
            <h5>{props.user}'s Post</h5>
            <div className="card-body">
            <p className="card-text">{props.text}</p>  
            </div>
        </div>
       </div> 
       
    )
}

export default Post;