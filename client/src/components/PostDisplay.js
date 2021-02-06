import React, {Component} from "react";
import Post from "./Post";
import API from "../utils/API";

class PostDisplay extends Component {
    state = {
        posts: [],
        search: ""
    }
    componentDidMount() {
        API.getPosts()
        .then(res=> {
          let posts = res.data;
          this.setState({posts})
        })
        .catch(err => console.log(err));
    }

    handleInputChange = event => {
        let value = event.target.value;
        this.setState({ search: value }, () => {
            this.handleSearch();
        });
      };
    
    handleSearch = () => {
        let key = this.state.search;
        let currentArr = this.state.posts;
        let newArr = currentArr.filter(post => {
            return post.user.toLowerCase().includes(key.toLowerCase());
        });
        this.setState((state) => {
            return {posts: newArr};
        });
    }

    render() {
        if (!this.state.posts) {
            return(
                <div></div>
            )
        }
        return(
            <div className="marginTop">
                 <input
                    value={this.state.search}
                    onChange={this.handleInputChange}
                    autoComplete='off'
                    name="search"
                    type="text"
                    className="form-control"
                    placeholder="Search by name"
                    id="search"
                />
                <div className="row" style={{ textAlign : 'center;'}}>
                {this.state.posts.map(post => (<Post image={post.image} user={post.user} text={post.text} id={post._id} key={post._id}/>))}
                </div>
            </div>
        )
    }
}

export default PostDisplay;