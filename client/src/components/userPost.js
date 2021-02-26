import React, {Component} from "react";
import Context from "../utils/Context";
import ProfilePost from "./ProfilePost";
import axios from "axios";

class UserPost extends Component {
    static contextType= Context;
    state = {
        posts: null
    }
    componentDidMount() {
        const user = this.context;
        let username = user[0].username;
        let url = "/api/userPost/"+ username;
        axios.get(url)
        .then(res=> {
          let posts = res.data;
          this.setState({posts})
        })
        .catch(err => console.log(err));
    }
    
    Delete = event => {
        let id = event.target.dataset.id;
        let url = "/api/deletePost/" + id;
        axios.delete(url)
        .then(res => {
            // Refresh post display after a delete
            this.setState({posts:null});
            const user = this.context;
            let username = user[0].username;
            let url = "/api/userPost/"+ username;
            axios.get(url)
            .then(res=> {
            
            let posts = res.data;
            this.setState({posts})
            })
            .catch(err => console.log(err));
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
                    {this.state.posts.map(post => (<ProfilePost Delete={this.Delete} image={post.image} user={post.user} text={post.text} id={post._id} key={post._id}/>))}
                </div>
            </div>
        )
    }
}

export default UserPost;