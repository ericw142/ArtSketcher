import React from "react";

function Post(props) {
    return(
        <div>
            <p>{props.user}'s Post</p>
            <img src={props.image}></img>
        </div>
        
    )
}

export default Post;