import React, { useState } from "react";
import "../styles/login.css";
import Lottie from 'lottie-react';
import Animation from "./Animation-4.json"; 

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch("http://localhost:5000/api/auth/login", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email, password }),
      });
      const data = await response.json();
      if (response.ok) {
        alert("Login Successful!");
        localStorage.setItem("token", data.token); // Store token
      } else {
        alert(data.message);
      }
    } catch (error) {
      alert("Error logging in");
    }
  };

  return (
    <div className="login--containers">
      <div className="form-boxes">
        <h2>Login</h2>
        <form onSubmit={handleLogin}>
          <label>Email:</label>
          <input 
            type="email" 
            placeholder="Enter your email" 
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
          <label>Password:</label>
          <input 
            type="password" 
            placeholder="Enter your password" 
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
          <button className="btn-1" type="submit">Login</button>
          <p>
            Don't have an account? <a href="/signup">Sign up here</a>
          </p>
        </form>
      </div>
      <div className="animation-boxes">
        <Lottie animationData={Animation} loop={true} />
      </div>
    </div>
  );
};

export default Login;