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
        <p>On this site, I implemented an API fetch of my GitHub portfolio, showing a page with a list of all my repositories on GitHub, and another page showing data for a single repo clicked from the list of repos using nested routes while using all the necessary tools in react. I aslo implemented the proper SEO, Error Boundary (show a page to test the error boundary) and 404 pages</p>
        <br />
        <Link to="profile">
          <button className="onboarding-button">Let's Go !</button>
        </Link>
      </>
    </div>
  );
};

export default OnBoarding;
