import React from "react";

function Post(props) {
    return(
        <div>
            <p>post</p>
            <img src={props.image}></img>
        </div>
        
    )
}

export default Post;