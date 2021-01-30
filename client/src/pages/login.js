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
      <div>
        <h2>Login to begin</h2>
          <LoginForm />
          <br />
        <h2>Don't have an account? Click here to sign up.</h2>
        <button onClick={this.handleFormDisplay}>Sign Up</button>
          <br />
        {this.renderForm()}
      </div>
    );
  }
}

export default Login;