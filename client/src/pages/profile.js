import React, {useEffect, useContext} from "react";
import ReactDOM from "react-dom";
import { Link, useLocation} from "react-router-dom";
import Canvas from "../components/Canvas";
import Context from "../utils/Context";
import UserPost from "../components/userPost";

function Profile(props) {
  const [context, setContext] = useContext(Context);

  if (context.username === "") {
    return(
      <div>
        <h2>Please log in to start using ArtSketcher!</h2>
      </div>
    )
  }
  return (
  <div className="jumbotron">
  <div className="container">
  <div className="row">
  <div className="col-md-6">  
  <div className="card border-secondary bg-light mb-3">
  <div className="card-body">
  
  <div className="panel">
    <img className="pic img-circle" src="http://placehold.it/120x120" alt="..." />
  <hr></hr>  
    <div className="name">Username:<h2>{context.username}</h2></div>
  </div>
  <hr></hr>
{/* {this.state.following_num} */}

  <div className="stats">
        <ul>
            <li><span className="post_num"></span> posts</li>
        </ul>
  </div>
  
  {/* <h3>Bio</h3 > */}
  </div>
  <h5 class="text-center">User's Drawings</h5>
  <hr/>
  <div class="card-body text-secondary">
  <UserPost />
  </div>
  
    </div>
    
    </div>
    <div className="col-md-6 ml-auto">
     
     <div className="card border-secondary bg-light mb-3 text-center">
     <h5 className="card-title text-center">Draw your Sketch!</h5> 
     <hr></hr> 
     <div className="card-body text-secondary">
    <Canvas />
    </div> 
    </div>
   
    
    
    </div>

    </div>
    
    <br></br>
    
    
     
     <br></br>
     
    </div> 
    </div>                                                     
  );
}

export default Profile;