import React, { useContext } from "react";
import Context from "../utils/Context";

function Home(props) {
  const [context, setContext] = useContext(Context);

  const logState = () => {
    console.log(context)
  }

  return (
    <div>
      <h1>Home</h1>
      <button onClick={logState}>Log</button>
    </div>
  );
}

export default Home;