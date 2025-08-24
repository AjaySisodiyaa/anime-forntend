import React from "react";
import "./Navbar.css";

const Navbar = () => {
  return (
    <div className="Navbar">
      <div
        onClick={() => window.location.replace("/")}
        className="logo-container"
      >
        <img src="/logo.png" alt="" />
        <h1>Majelo</h1>
      </div>
    </div>
  );
};

export default Navbar;
