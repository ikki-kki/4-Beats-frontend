import React from "react";
import "./Support.scss";

class Support extends React.Component {
  render() {
    return (
      <div className="Support">
        <div className="Main-Top">
          <div className="Main-Text-Wrap">
            <h1>
              Welcome to <br />
              Beats Support
            </h1>
          </div>
          <div className="Main-Img">
            <img
              src="https://www.beatsbydre.com/content/dam/beats-support/global/images/beats-support-hero.jpg.large.2x.jpg"
              alt="Main-top-img"
            />
          </div>
        </div>
        {/* <div className=""></div> */}
      </div>
    );
  }
}
export default Support;
