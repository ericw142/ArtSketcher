import React, { Component } from "react";
import API from "../utils/API";

class SignupForm extends Component {

    submitSignupForm = event => {
        event.preventDefault();

        let username = event.target.username.value;
        let email = event.target.email.value;
        let password = event.target.password.value

        API.signup({username, email, password})
        .then(res => console.log(res))
        .catch(err => console.log(err));
    };

    render() {
        return(
            <form className="signup" onSubmit={this.submitSignupForm}>
                <div className="form-group">
                    <label htmlFor="username">Username</label>
                    <input type="text" name="username" className="form-control" placeholder="Username"></input>
                </div>
                <div className="form-group">
                    <label htmlFor="email">Email</label>
                    <input type="email" name="email" className="form-control" placeholder="Email"></input>
                </div>
                <div className="form-group">
                    <label htmlFor="password">Password</label>
                    <input type="password" name="password" className="form-control" placeholder="Password"></input>
                </div>
                <button type="submit" className="btn btn-default">Register</button>
            </form>
        )
    }
}

export default SignupForm;