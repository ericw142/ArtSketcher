import React from "react";

function Post(props) {
    return(
        
        <div className="col-md-5 post">  
            <div className="card post mb-3 text-center">
                <div className="card-header text-center"><h6>{props.user}'s Post</h6></div>
                
                <img className='postImage' src={props.image} alt="userPost"></img>
                    
                <div className="card-body postBody">
                    <p className="text-muted">{props.text}</p>  
                </div>
            </div> 
       </div>
       
    )
}

export default Post;