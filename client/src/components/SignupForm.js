import React, { Component, useContext } from "react";
import API from "../utils/API";
import Context from "../utils/Context";
import Sform from "./Sform";

class SignupForm extends Component {
    state = {
        signedUp: false
    }

    successDisplay = () => {
        if (this.state.signedUp) {
            return <p>You have successfully signed up! Please use the login above.</p>;
        }
        else {
            return;
        }
    }

    render() {
        return(
            <div>
                 <Sform />
                 {this.successDisplay()}
            </div>
        )
    }
}
SignupForm.contextType = Context;

export default SignupForm;