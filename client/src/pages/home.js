import React from "react";
import PostDisplay from "../components/PostDisplay";

function Home(props) {

  return (
    <div className="card">
      
      <header className="card-header">
      <div className="card-header-content profile-info">
      <div className="card-header text-center">
    <h2>Drawings Wall</h2>
  </div>
      <div className="col-md-10"></div>
      <PostDisplay />
      </div>
      </header>
    </div>
  );
}

export default Home;