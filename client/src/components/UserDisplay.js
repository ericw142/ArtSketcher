import React, { Component } from "react";
import API from "../utils/API";
import UserLI from "./UserLI";

class UserDisplay extends Component {
    state = {
        users: []
    }

    componentDidMount() {
        API.findAllUsers()
        .then(res => {
            let users = res.data;
            this.setState({users})
        })
        .catch(err => console.log(err))
    }

    render() {
        if (this.state.users.length === 0) {
            return(
                <div>
                    <p>No users found! Sign up and be the first!</p>
                </div>
            )
        }
        return(
            <div>
                <h3 className="text-center">Current Users</h3>
                <ul id="userList">
                    {this.state.users.map(user => (<UserLI username ={user.username}/>))}
                </ul>
            </div>
        )
    }
}

export default UserDisplay;