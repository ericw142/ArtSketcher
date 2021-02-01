import React from "react";
import { Link, useLocation } from "react-router-dom";

function Navbar() {
    const location = useLocation();
  
    return (
      <nav>
      <span className="navbar-header" href="#">ArtSketcher</span>
      <ul className="nav justify-content-center nav-tabs">
        <li className="nav nav-tabs pull-right">
          <Link to="/" className={location.pathname === "/home" ? "nav-link active" : "nav-link"}>
            Home
          </Link>
        </li>
        <li className="nav nav-tabs pull-right">
          <Link
            to="/profile"
            className={location.pathname === "/profile" ? "nav-link active" : "nav-link"}
          >
            Profile
          </Link>
        </li>
        <li className="nav nav-tabs pull-right">
          <Link
            to="/login"
            className={location.pathname === "/login" ? "nav-link active" : "nav-link"}
          >
            Login
          </Link>
        </li>
        </ul>
      </nav>
    );
  }

export default Navbar;