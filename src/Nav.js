import React from "react";
import "./Nav.css";
import { Link } from "react-router-dom";

function Nav() {
  return (
    <div className="nav">
      <Link style={{ textDecoration: "none", color: "blue" }} to="/">
        Home
      </Link>
      <Link style={{ textDecoration: "none", color: "blue" }} to="/about">
        About
      </Link>
      <Link style={{ textDecoration: "none", color: "blue" }} to="/Contact">
        Contact
      </Link>
    </div>
  );
}

export default Nav;
