import React, { Component } from "react";
import API from "../utils/API";
import 'bootstrap/dist/css/bootstrap.css';

class LoginForm extends Component {

    submitLoginForm = event => {
       event.preventDefault();

       let username = event.target.loginUsername.value;
       let password = event.target.loginPassword.value;

       API.login({username, password})
       .then(res => {
           console.log(res.token);
           window.location.replace("/profile");
       })
       .catch(err => console.log(err));
    }

    render() {
        return(
            <div className="container">
                <div className="row">
                <div class="card card-signin my-5">
                <div class="card-body">
                <h5 class="card-title text-center">Sign In</h5>
                <hr/>          
            <form className="login" onSubmit={this.submitLoginForm}>
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
}

export default LoginForm;