import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import "../styles/Home.css";

const Home = () => {
  const navigate = useNavigate();
  const [heading, setHeading] = useState("Get ready for the new era of AI");
  const [buttonText, setButtonText] = useState("Get Started →");

  useEffect(() => {
    // Example: You can fetch content from an API in the future
    // setHeading("Welcome to AI Revolution");
    // setButtonText("Join Now →");
  }, []);

  return (
    <div className="home">
      <div className="content">
        <h1>{heading}</h1>
        <button className="get-started" onClick={() => navigate("/signup")}>
          {buttonText}
        </button>
      </div>
    </div>
  );
};

export default Home;
