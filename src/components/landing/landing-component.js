import React from "react";

import "./landing-component.scss";

const LandingComponent = (props) => {
  const { isLoggedin } = props;
  return (
    <div id="landing-component">
      <div id="content">
        <div id="header">Welcome to the Golden Pages website</div>
        {!isLoggedin && (
          <div id="message">You must sign in or log in to view content!</div>
        )}
      </div>
    </div>
  );
};

export default LandingComponent;
