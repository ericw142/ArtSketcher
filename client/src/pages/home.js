import React, { useContext, useEffect } from "react";
import Context from "../utils/Context";
import PostDisplay from "../components/PostDisplay";

function Home(props) {
  const [context, setContext] = useContext(Context);

  const logState = () => {
    console.log(context)
  }

  return (
    <div className="card">
      
      <header className="card-header">
      <div className="card-header-content profile-info">
      <div class="card-header text-center">
    <h2>Drawings Wall</h2>
  </div>
      <div className="col-md-10"></div>
      {/* <button onClick={logState}>Log</button> */}
      
      <PostDisplay />
      </div>
      </header>
    </div>
  );
}

export default Home;