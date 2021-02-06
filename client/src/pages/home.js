import React from "react";
import PostDisplay from "../components/PostDisplay";

function Home(props) {

  return (
    <div className="jumbotron">
    {/* <div class="container"> */}
    <div class="row justify-content-md-center">
    <div class="col col-md-6"> 
    <div className="card border-secondary bg-light mb-3">
    <div class="card-header text-center"><h2>Drawings Wall</h2></div>
    <div className="card-body bg-dark mb-3">
    
    <PostDisplay />
    </div>
    </div>
      
      
      
    </div>
    </div> 
   </div> 
  // </div> 
  
  
  );
}

export default Home;