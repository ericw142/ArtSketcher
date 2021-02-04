import React, {Component, useEffect} from "react";
import Context from "../utils/Context";
import Post from "./Post";
import API from "../utils/API";
import axios from "axios";

class UserPost extends Component {
    static contextType= Context;
    state = {
        posts: null
    }
    componentDidMount() {
        const user = this.context;
        let username = user[0].username;
        let url = "/userPost/"+ username;
        // API.getUserPost({username})
        axios.get(url)
        .then(res=> {
         
          let posts = res.data;
          this.setState({posts})
        })
        .catch(err => console.log(err));
    
    }
    
    render() {
        if (!this.state.posts) {
            return(
                <div></div>
            )
        }
        return(
            <div className="marginTop">
                <div className="row" style={{ textAlign : 'center;'}}>
                {this.state.posts.map(post => (<Post image={post.image} user={post.user} text={post.text}/>))}
                </div>
            </div>
        )
    }
}

export default UserPost;