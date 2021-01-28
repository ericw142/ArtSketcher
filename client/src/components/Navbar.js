import React from "react";
import { Link, useLocation } from "react-router-dom";

function Navbar() {
    const location = useLocation();
  
    return (
      <ul className="nav nav-tabs">
        <li className="nav-item">
          <Link to="/" className={location.pathname === "/home" ? "nav-link active" : "nav-link"}>
            Home
          </Link>
        </li>
        <li className="nav-item">
          <Link
            to="/profile"
            className={location.pathname === "/profile" ? "nav-link active" : "nav-link"}
          >
            Profile
          </Link>
        </li>
        <li className="nav-item">
          <Link
            to="/login"
            className={location.pathname === "/login" ? "nav-link active" : "nav-link"}
          >
            Login
          </Link>
        </li>
      </ul>
    );
  }

export default Navbar;