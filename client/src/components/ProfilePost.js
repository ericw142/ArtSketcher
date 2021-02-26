import React from "react";
import { Trash } from "react-bootstrap-icons"

function ProfilePost(props) {

    return(
        <div className="row justify-content-md-center post">
            <div className="col-md-7">  
                <div className="card post text-center">
                    
                    <div className="card-header text-center"><h6>{props.user}'s Post</h6></div>
                    <img className='postImage' src={props.image} alt="userPost"></img>
                    
                    <div className="card-body postBody">
                        <p className="card-text">{props.text}</p> 
                        <button className="btn btn-secondary" data-id={props.id} onClick={props.Delete}><Trash/></button>
                    </div>
                    
                </div> 
            </div>
       </div>
    )
}

export default ProfilePost;