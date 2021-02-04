import React from "react";

function ProfilePost(props) {

    return(
        
        <div className="col-md-7">  
        <div className="card post text-center">
            <img src={props.image}></img>
            <hr/>
            <h5>{props.user}'s Post</h5>
            <div className="card-body">
            <p className="card-text">{props.text}</p> 
            {/* Delete Button */}
            <span data-id={props.id} onClick={props.Delete}> X </span> 
            </div>
        </div>
       </div> 
       
    )
}

export default ProfilePost;