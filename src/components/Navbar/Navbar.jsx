import React from "react";
import "./Navbar.css";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <div className="Navbar">
      <div className="links">
        <Link className="nav-link" to="/">
          Home
        </Link>
        <Link className="nav-link" to="/series">
          Series
        </Link>
        <Link className="nav-link" to="/movies">
          Movies
        </Link>
      </div>
      <div
        onClick={() => window.location.replace("/")}
        className="logo-container"
      >
        <img src="/logo.png" alt="" />
        <h1 className="glow-animate">Majelo</h1>
      </div>
    </div>
  );
};

export default Navbar;
