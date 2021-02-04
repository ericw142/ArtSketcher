import React from "react";
import PostDisplay from "../components/PostDisplay";

function Home(props) {

  return (
    <div className="card">
      
    <header className="card-header">
    <div class="card-header text-center">
    <h2>Drawings Wall</h2>
  </div>
      <div className="col-md-9"></div>
      <PostDisplay />
      
      </header>
    </div>
  );
}

export default Home;