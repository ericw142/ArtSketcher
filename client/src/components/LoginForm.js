import React, { Component } from "react";
import API from "../utils/API";

class LoginForm extends Component {

    submitLoginForm = event => {
       event.preventDefault();

       let username = event.target.loginUsername.value;
       let password = event.target.loginPassword.value;

       API.login({username, password})
       .then(res => console.log(res))
       .catch(err => console.log(err));
    }

    render() {
        return(
            <form className="login" onSubmit={this.submitLoginForm}>
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
}

export default LoginForm;