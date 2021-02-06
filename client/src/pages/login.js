import React, { Component } from "react";
import LoginForm from "../components/LoginForm";
import SignupForm from "../components/SignupForm";

class Login extends Component {
  state = {
    currentForm: ""
  };

  handleFormDisplay = () => {
    this.setState({currentForm: "signup"})
  };

  renderForm = () => {
    if (this.state.currentForm === "signup") {
      return (
        <SignupForm />
      )
    }
  }

  render() {
    return (
      <div className="jumbotron">
          
      
          <LoginForm />
          <br />
        <h2 className="text-center">Don't have an account? Click here to sign up.
        <button className="btn btn-primary text-center" onClick={this.handleFormDisplay}>Sign Up</button></h2>

        {this.renderForm()}
      </div>
     
    );
  }
}

export default Login;