import React, {Component, useEffect} from "react";
import Post from "./Post";
import API from "../utils/API";

class PostDisplay extends Component {
    state = {
        posts: null
    }
    componentDidMount() {
        API.getPosts()
        .then(res=> {
          console.log(res);
          let posts = res.data;
          this.setState({posts})
          console.log(this.state.posts)
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

export default PostDisplay;