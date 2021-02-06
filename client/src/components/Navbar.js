import React from "react";
import { Link, useLocation} from "react-router-dom";
import { Brush } from 'react-bootstrap-icons';

function Navbar() {
    const location = useLocation();
  
    return (
      
      <nav className="navbar navbar-expand-lg navbar-light bg-dark cyan">
      <nav aria-controls="basic-navbar-nav" />
      <nav id="basic-navbar-nav"/>  
      <Brush color="royalblue" size={30} />
      <span className="navbar-brand font-bold" style={{ color : 'white'}} href="/home">ArtSketcher</span>

      <div className="collapse navbar-collapse" id="navbarSuapportedContent-4">
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
        <li className="nav-item">
          <Link
            to="/logout"
            className={location.pathname === "/login" ? "nav-link" : "nav-link"} style={{ color : 'white'}} >
            Logout
          </Link>
        </li>
        </ul>
        
    
        </div>
      </nav>
    );
  }

export default Navbar;