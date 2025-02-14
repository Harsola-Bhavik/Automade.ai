import React from "react";
import { useNavigate } from "react-router-dom";
import "../styles/Navbar.css";
import logo from "../assets/logo.webp";

const Navbar = () => {
  const navigate = useNavigate();

  return (
    <nav className="navbar">
      <div className="logo" onClick={() => navigate("/")}>
        <img src={logo} alt="Logo" />
        <span className="text">Automade</span>
      </div>
      <ul className="nav-links">
        <a href="#">Feature</a>
        <a href="#">About</a>
      </ul>
      <div className="buttons">
        <button className="home-btn" onClick={() => navigate("/")}>
          Home
        </button>
        <button className="signup" onClick={() => navigate("/signup")}>
          Sign Up
        </button>
        <button className="login" onClick={() => navigate("/login")}>
          Login
        </button>
      </div>
    </nav>
  );
};

export default Navbar;
