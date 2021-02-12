import React, { useState } from "react";
import {Button, UncontrolledPopover, PopoverHeader, PopoverBody} from 'reactstrap';
import axios from "axios";

function UserLI(props) {
    const [count, setCount] = useState();
    const searchPosts = () => {

        let searchName = props.username;
        let url = "/api/userDataSearch/"+searchName
        axios.get(url)
        .then(res => {
         setCount(res.data.length);
         // alert(props.username + " has " + postCount + " sketches!");
        })
        .catch(err => console.log(err));

    }
    return(
        <div className="justify-content-md-start">
        <div className="card">
        <div className="card-body userListCard">    
        <div>
        <Button id={props.username} type="button" onClick={searchPosts}>
        {props.username}
        </Button>
        
        
    <UncontrolledPopover placement="right" target={props.username}>
      <PopoverHeader>User Info</PopoverHeader>
      <PopoverBody>{props.username} has {count} sketches!</PopoverBody>
    </UncontrolledPopover>
    </div>
    </div>
    </div>
    </div>
      ) 
    
}

export default UserLI;