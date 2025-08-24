import React from "react";
import "./Navbar.css";

const Navbar = () => {
  return (
    <div className="Navbar">
      <h1 onClick={() => window.location.replace("/")}>Majelo</h1>
    </div>
  );
};

export default Navbar;
