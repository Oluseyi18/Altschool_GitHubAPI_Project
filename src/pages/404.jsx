import React from "react";
import { Link } from "react-router-dom";
const ErrorPage = () => {
  return (
    <>
      <Link to="/">
          <button className="fourest">Homepage</button>
      </Link>
      <h1 className="fourOfour">OOPS! <br /> 404 - Page Not Found</h1>
    </>
  );
};

export default ErrorPage;
