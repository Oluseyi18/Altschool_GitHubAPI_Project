import React from "react";
import { Link } from "react-router-dom";

// Onboarding Picture
import onBoarding from "../assets/page-lander-1.gif";

const OnBoarding = () => {
  return (
    <div className="onboarding-screen-container">
      <>
        <img className="onboarding-image" src={onBoarding} alt="onboarding" />
        <h4 className="onboarding-title">MY PORTFOLIO, FOR YOUR PERUSAL </h4>
        <br />
        <Link to="profile">
          <button className="onboarding-button">Let's Go !</button>
        </Link>
      </>
    </div>
  );
};

export default OnBoarding;
