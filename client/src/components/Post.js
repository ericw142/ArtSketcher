import React from "react";

function Post(props) {
    return(
        <div className="row" style={{ textAlign : 'center;'}}>
        <div class="col-md-6">  
        <div className="card">
            <img src={props.image}></img>
            <p>{props.user}'s Post</p>
            <div class="card-body">
            <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>  
            </div>
        </div>
       </div> 
       </div>  
    )
}

export default Post;