import React from "react";
import PostDisplay from "../components/PostDisplay";
import UserDisplay from "../components/UserDisplay";

function Home(props) {

  return (
    <div className="jumbotron">
      <div className="row justify-content-md-center">
        <div className="col col-md-9"> 
          <div className="card border-secondary bg-light mb-3">
          <div className="card-header text-center"><h1 className="display-2">Sketch Wall</h1></div>

          <div className="card-body mb-3 sketchy">
            <PostDisplay />
          </div>
          </div>
        </div>
        
        <div className="col col-md-3">
            <UserDisplay />
        </div>

      </div>

   </div>  
  
  );
}

export default Home;