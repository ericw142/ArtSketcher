import React, { useContext } from "react";
import Context from "../utils/Context";
import API from "../utils/API";
import { useHistory } from "react-router-dom";
import { EmojiSunglassesFill, EmojiExpressionlessFill, EmojiDizzyFill } from "react-bootstrap-icons";

function Sform(props) {
    const [context] = useContext(Context);
    const history = useHistory();

    const submitSignupForm = event => {
        event.preventDefault();

        let username = event.target.username.value;
        let email = event.target.email.value;
        let password = event.target.password.value;
        let icon = event.target.icon.value;

        API.signup({username, email, password, icon})
        .then(res => {
            console.log(res.data);
            if (res.data.success === false) {
                alert("Your desired username or email are already in use. Please use another.");
            } else {
                context.username = username;
                context.icon = icon;
                alert("Successfully signed up!")
                history.push("/profile");
            }
        })
        .catch(err => console.log(err));
    };
    return(
        <div className="container">
                <div className="row justify-content-md-center">
                <div class="card card-signin my-5">
                <div class="card-body">
                <h5 class="card-title text-center">Sign Up</h5>
                <hr/>
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
                    <div className="form-group">
                        <label htmlFor="icon">Choose your user icon</label>
                        <hr></hr>
                        <div>
                            <input className="marginTop marginRight" type="radio" name="icon" value="EmojiSunglassesFill"></input>
                            <EmojiSunglassesFill color="darkslategray" size={30}/>
                            <br></br>
                            <input className="marginTop marginRight" type="radio" name="icon" value="EmojiExpressionlessFill"></input>
                            <EmojiExpressionlessFill color="darkslategray" size={30}/>
                            <br></br>
                            <input className="marginTop marginRight" type="radio" name="icon" value="EmojiDizzyFill"></input>
                            <EmojiDizzyFill color="darkslategray" size={30}/>
                        </div>
                        
                       
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