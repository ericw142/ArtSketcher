import React from "react";

function ProfilePost(props) {

    return(
        <div class="row justify-content-md-center">
        <div className="col-md-7">  
        <div className="card post text-center">
        <div class="card-header text-center"><h5>{props.user}'s Post</h5></div>
            <img src={props.image}></img>
            
            
            <div className="card-body">
            <div class="card-footer">  
            <p className="card-text">{props.text}</p> 
            <a href="#" class="card-link" data-id={props.id} onClick={props.Delete}> Remove </a> 
            </div>
        </div>
       </div> 
       </div>
       </div>
    )
}

export default ProfilePost;