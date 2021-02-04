import React, { useContext, useEffect } from "react";
import Context from "../utils/Context";
import PostDisplay from "../components/PostDisplay";

function Home(props) {
  const [context, setContext] = useContext(Context);

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