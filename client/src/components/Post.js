import React from "react";

function Post(props) {
    return(
        
        <div className="col-md-5">  
        <div className="card post border-secondary mb-3 text-center">
        <div class="card-header text-center"><h5>{props.user}'s Post</h5></div>
            <img src={props.image}></img>
            
            
            <div className="card-body">
            <div class="card-footer">
            <p className="text-muted">{props.text}</p>  
            </div>
        </div>
       </div> 
       </div>
       
    )
}

export default Post;