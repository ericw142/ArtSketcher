import React, {useEffect, useContext} from "react";
import ReactDOM, { render } from "react-dom";
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
    <div>
      <p>Profile</p>
      <Canvas />
    </div>
  );
}

export default Profile;