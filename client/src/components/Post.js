import React from "react";

function Post(props) {
    return(
        
        <div className="col-md-7">  
        <div className="card post text-center">
            <img src={props.image}></img>
            <hr/>
            <h5>{props.user}'s Post</h5>
            <hr/>
            <div class="card-body">
            <p class="card-text">{props.text}</p>  
            </div>
        </div>
       </div> 
       
    )
}

export default Post;