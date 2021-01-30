import React, { useContext } from "react";
import Context from "../utils/Context";
import API from "../utils/API";

function Sform(props) {
    const [context, setContext] = useContext(Context);

    const submitSignupForm = event => {
        event.preventDefault();

        let username = event.target.username.value;
        let email = event.target.email.value;
        let password = event.target.password.value

        API.signup({username, email, password})
        .then(res => {
            context.username = username;
        })
        .catch(err => console.log(err));
    };

    return(
        <div className="container">
                <div className="row">
                <div class="card card-signin my-5">
                <div class="card-body">
                <h5 class="card-title text-center">Sign Up</h5>

                <form className="signup" onSubmit={submitSignupForm}>
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
                    <button type="submit" className="btn btn-primary">Register</button>
                </form> 

                </div>
                </div>
                </div>
                </div>
    )
}

export default Sform;