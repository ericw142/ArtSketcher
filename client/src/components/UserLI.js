import React, { useEffect } from "react";
import axios from "axios";

function UserLI(props) {
    const searchPosts = () => {
        let searchName = props.username;
        let url = "/api/userDataSearch/"+searchName
        axios.get(url)
        .then(res => {
            let postCount = res.data.length;
            alert(props.username + " has " + postCount + " sketches!");
        })
        .catch(err => console.log(err));
    }
    
    return(
        <li className="UserLI" onClick={searchPosts}>
            {props.username}
        </li>
    )
}

export default UserLI;