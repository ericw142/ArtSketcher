import React, {Component} from "react";
import Post from "./Post";
import API from "../utils/API";

class PostDisplay extends Component {
    state = {
        posts: null
    }
    componentDidMount() {
        API.getPosts()
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
            <div className="MarginTop">
                <div className="row justify-content-md-center">
                 
                {this.state.posts.map(post => (<Post image={post.image} user={post.user} text={post.text} id={post._id} key={post._id}/>))}
                
                </div>
            </div>
        )
    }
}

export default PostDisplay;