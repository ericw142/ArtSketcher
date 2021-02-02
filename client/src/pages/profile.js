import React, {useEffect, useContext} from "react";
import ReactDOM from "react-dom";
import { Link, useLocation} from "react-router-dom";
import Canvas from "../components/Canvas";
import Context from "../utils/Context";


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
   <div className="container">
    <div className="row">
    <header className="card-header"> 
    <div className="profile">
    <div class="col-md-10">   
    <div className="card">
     <div className="card-body">
    <div className="card-header-content profile-info">
      <div className="col-md-10">
      <div className="panel">
        <img className="pic img-circle" src="http://placehold.it/120x120" alt="..." />
        <div className="name"><small>{context.username}</small></div>
      </div>
      
    {/* {this.state.following_num} */}
      <div className="stats">
            <ul>
                <li><span className="post_num"></span> posts</li>
                <li><span className="follower_num"></span> followers</li>
                <li><span className="following_num"></span> following</li>
            </ul>
      </div>
      <p>Description</p>
      </div>
      </div>
     
     </div>
     </div>
     <div className="card-content">
        <Canvas />
      </div> 
    </div>
    </div>
    </header> 
   </div> 
   </div>
  );
}

export default Profile;