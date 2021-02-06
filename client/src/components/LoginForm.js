import React, { useContext } from "react";
import { useHistory } from "react-router-dom";
import Context from "../utils/Context";
import API from "../utils/API";

function LoginForm(props){
    const [context] = useContext(Context);
    const history = useHistory();

    const submitLoginForm = event => {
       event.preventDefault();

       let username = event.target.loginUsername.value;
       let password = event.target.loginPassword.value;

       API.login({username, password})
       .then(res => {

           console.log(res.data);
            if (res.data.success === false) {
                alert("Your username or password are incorrect.")
            } else {
                context.username = res.data.user;
                history.push("/profile");
            }  
       })
       .catch(err => console.log(err));
    }
   
    return(
        <div className="container">
                <div className="row">
                <div className="card card-signin my-5">
                <div className="card-body">
                <h5 className="card-title text-center">Sign In</h5>
                <hr/>  
                <form className="login" onSubmit={submitLoginForm}>
                    <div className="form-group">
                    
                    <label htmlFor="loginUsername">Username</label>    
                    <input type="text" name="loginUsername" className="form-control" placeholder="Username"></input>
                    </div>
                    <div className="form-group">
                    <label htmlFor="loginPassword">Password</label>
                    <input type="password" name="loginPassword" className="form-control" placeholder="Password"></input>
                    </div>
                    <button type="submit" className="btn btn-md btn-primary">Login</button>
                </form>  
                </div>
            </div>
           </div>
        </div>  
    )    

}

export default LoginForm;