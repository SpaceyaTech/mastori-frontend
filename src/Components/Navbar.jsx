import React from "react";
import { Link } from "react-router-dom";
import logo from "../assets/logo.png";

// Navbar Routing
// Corresponding CSS file = index.css
// Components and Pages can be found in their respective directory

function Navbar() {
  return (
    <header className="header">
      <Link to="/" className="logo-ink">
        <img className="logo" src={logo} alt="Logo"></img>
      </Link>
      <nav className="frame1">
        <ul class="nav__links">
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/Forums">Forums</Link>
          </li>
          <li>
            <Link to="/Events">Events</Link>
          </li>
          <li>
            <Link to="/Blog">Blog</Link>
          </li>
          <li>
            <Link to="/About">About Us</Link>
          </li>
          <li>
            <Link to="/Jobs">Jobs</Link>
          </li>
        </ul>
      </nav>
      <div class="button-container">
        <Link to="/Login">
          <button>Login</button>
        </Link>
        <Link to="/Signup">
          <button>Sign up</button>
        </Link>
      </div>
    </header>
  );
}

export default Navbar;