import React, { useContext} from "react";
import Canvas from "../components/Canvas";
import Context from "../utils/Context";
import UserPost from "../components/userPost";

function Profile(props) {
  const [context] = useContext(Context);

  const logout = () => {
    window.location.replace('/')
  }

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
  {/* User Info */}
  <div className="panel">
    {/* <img className="pic img-circle" src="http://placehold.it/120x120" alt="..." /> */}
  {/* <hr></hr>   */}
    <div className="name">Username:<h2>{context.username}</h2></div>
  </div>
  <hr></hr>
{/* {this.state.following_num} */}

  <div className="stats">
        <div className="row">
          <div className="col-md-6">
            <button onClick={logout}>Logout</button>
          </div>
        </div>
  </div>
  
  {/* <h3>Bio</h3 > */}
  </div>
  <h5 class="text-center">{context.username}'s Drawings</h5>
  <hr/>
  <div class="card-body text-secondary">
  <UserPost />
  </div>
  
    </div>
    
    </div>
    {/* Canvas Section */}
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