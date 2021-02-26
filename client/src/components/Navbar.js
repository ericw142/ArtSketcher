import React, { useContext } from "react";
import { Link, useLocation} from "react-router-dom";
import { Brush } from 'react-bootstrap-icons';
import Context from "../utils/Context";

function Navbar() {
    const [context] = useContext(Context);
    const location = useLocation();

    const logout = () => {
      window.location.replace('/')
    }


    if (context.username === "") {
      return (
        <nav className="navbar navbar-expand-lg navbar-light bg-dark cyan">
        <nav aria-controls="basic-navbar-nav" />
        <nav id="basic-navbar-nav"/>  
        <Brush color="white" size={30} />
        <span className="navbar-brand font-bold" style={{ color : 'white'}} href="/home">ArtSketcher</span>
  
        <ul className="navbar-nav nav-tabs ml-auto">
          <li className="nav-item">
            <Link to="/" className={location.pathname === "/home" ? "nav-link" : "nav-link"} style={{ color : 'white'}} >
              Home
            </Link>
          </li>
          <li className="nav-item">
            <Link
              to="/profile"
              className={location.pathname === "/profile" ? "nav-link" : "nav-link"} style={{ color : 'white'}} >
              Profile
            </Link>
          </li>
          
          <li className="nav-item">
            <Link
              to="/login"
              className={location.pathname === "/login" ? "nav-link" : "nav-link"} style={{ color : 'white'}} >
              Login
            </Link>
          </li>
          </ul>
          
        </nav>
      );
    }
    return(
        <nav className="navbar navbar-expand-lg navbar-light bg-dark cyan">
          <nav aria-controls="basic-navbar-nav" />
          <nav id="basic-navbar-nav"/>  
          <Brush color="white" size={30} />
          <span className="navbar-brand font-bold" style={{ color : 'white'}} href="/home">ArtSketcher</span>
    
          <ul className="navbar-nav nav-tabs ml-auto">
            <li className="nav-item">
              <Link to="/" className={location.pathname === "/home" ? "nav-link" : "nav-link"} style={{ color : 'white'}} >
                Home
              </Link>
            </li>
            <li className="nav-item">
              <Link
                to="/profile"
                className={location.pathname === "/profile" ? "nav-link" : "nav-link"} style={{ color : 'white'}} >
                Profile
              </Link>
            </li>
            
            <li className="nav-item">
              <a href="#" onClick={logout} className="nav-link" style={{ color : 'white'}}>Logout</a>
            </li>
            </ul>
        </nav>
      );
  }

export default Navbar;