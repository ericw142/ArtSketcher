import React, {useEffect, useContext} from "react";
import ReactDOM from "react-dom";
import Canvas from "../components/Canvas";
import Context from "../utils/Context";
import Login from "../pages/login";

function Profile(props) {
  const [context, setContext] = useContext(Context);

  useEffect(() => {
    if(context.username === "") {
      // ReactDOM.render(<Login />) 
    } 
  }, [])

  return (
    <div>
      <p>Profile</p>
      <Canvas />
    </div>
  );
}

export default Profile;