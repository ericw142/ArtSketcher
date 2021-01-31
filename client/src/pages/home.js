import React, { useContext, useEffect } from "react";
import Context from "../utils/Context";
import PostDisplay from "../components/PostDisplay";

function Home(props) {
  const [context, setContext] = useContext(Context);

  const logState = () => {
    console.log(context)
  }

  return (
    <div>
      <h1>Home</h1>
      <button onClick={logState}>Log</button>
      <PostDisplay />
    </div>
  );
}

export default Home;