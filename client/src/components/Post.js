import React from "react";

function Post(props) {
    return(
        
        <div className="col-md-6">  
        <div className="card post">
            <img src={props.image}></img>
            <h5>{props.user}'s Post</h5>
            <div className="card-body">
            <p className="card-text">{props.text}</p>  
            </div>
        </div>
       </div> 
       
    )
}

export default Post;