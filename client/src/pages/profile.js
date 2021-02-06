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
      <div className="jumbotron">
      <div className="container">
      <div className="text-center">
        <h2>Please log in to start using ArtSketcher!Or Register to start creaing new sketches!</h2>
      </div>
      </div>
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
  
  </div>
  <div class="card-header text-center"><h5>{context.username}'s Drawings</h5></div>
  <div class="card-body bg-dark mb-3">
  <UserPost />
  </div>
  
    </div>
    
    </div>
    <div className="col-md-6 ml-auto">
     
     <div className="card border-secondary bg-light mb-3 text-center">
     <div class="card-header text-center"><h5>Draw your Sketch!</h5></div> 
     
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