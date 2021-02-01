import React from "react";
import { Link, useLocation} from "react-router-dom";

function Navbar() {
    const location = useLocation();
  
    return (
      
      <nav class="navbar navbar-expand-lg navbar-light bg-dark cyan">
      <span class="navbar-brand font-bold" style={{ color : 'white'}} href="#">ArtSketcher</span>

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
        </ul>
        
    
        </div>
      </nav>
    );
  }

export default Navbar;