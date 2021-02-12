import React, { Component } from "react";
import LoginForm from "../components/LoginForm";
import SignupForm from "../components/SignupForm";

class Login extends Component {
  state = {
    currentForm: ""
  };

  handleFormDisplay = () => {
    if (this.state.currentForm === "signup") {
      this.setState({currentForm: ""});
      return;
    }
    this.setState({currentForm: "signup"});
  };

  renderForm = () => {
    if (this.state.currentForm === "signup") {
      return (
        <SignupForm />
      )
    }
    else {
      return(
        <div></div>
      )
    }
  }

  render() {
    return (
      <div className="jumbotron">
          <LoginForm />
          <br />
        <h2 className="text-center">Don't have an account? <span><a href="#" className="primary text-center" onClick={this.handleFormDisplay}>Click Here</a></span> to sign up.</h2>

        {this.renderForm()}
      </div>
     
    );
  }
}

export default Login;