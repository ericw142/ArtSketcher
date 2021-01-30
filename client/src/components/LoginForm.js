import React, { useContext } from "react";
import {Redirect} from "react-router-dom";
import Context from "../utils/Context";
import API from "../utils/API";

function LoginForm(props){
    const [context, setContext] = useContext(Context);

    const submitLoginForm = event => {
       event.preventDefault();

       let username = event.target.loginUsername.value;
       let password = event.target.loginPassword.value;

       API.login({username, password})
       .then(res => {
           console.log(res.data);

           context.username = res.data.user;
           alert("Logged In!");
       })
       .catch(err => console.log(err));
    }

   
    return(
        <form className="login" onSubmit={submitLoginForm}>
            <div className="form-group">
                <label htmlFor="loginUsername">Username</label>
                <input type="text" name="loginUsername" className="form-control" placeholder="Username"></input>
            </div>
            <div className="form-group">
                <label htmlFor="loginPassword">Password</label>
                <input type="password" name="loginPassword" className="form-control" placeholder="Password"></input>
            </div>
            <button type="submit" className="btn btn-default">Login</button>
        </form>
    )    
}

export default LoginForm;