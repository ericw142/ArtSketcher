import React, { useEffect, useState } from "react";
import {Button, Popover, PopoverHeader, PopoverBody} from 'reactstrap';
import axios from "axios";

function UserLI(props) {
    const [count, setCount] = useState();
    const [popoverOpen, setPopoverOpen] = useState(false);

    const toggle = () => setPopoverOpen(!popoverOpen);

    let nameStore = props.username.toString();

    const searchPosts = () => {

        let searchName = nameStore;
        let url = "/api/userDataSearch/"+searchName
        axios.get(url)
        .then(res => {
         setCount(res.data.length);
        })
        .catch(err => console.log(err));

    }
    return(
        <div className="justify-content-md-start">
          <div className="card">
          <div className="card-body userListCard">    
          <div>
          <Button id={nameStore} type="button" onClick={searchPosts}>
          {nameStore}
          </Button>
          
          <Popover placement="right" target={nameStore} isOpen={popoverOpen} toggle={toggle}>
            <PopoverHeader>User Info</PopoverHeader>
            <PopoverBody>{props.username} has {count} sketches!</PopoverBody>
          </Popover>
        </div>
        </div>
        </div>
      </div>
      ) 
    
}

export default UserLI;