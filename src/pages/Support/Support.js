import React from "react";
import Config from "./Config";
import "./Support.scss";

class Support extends React.Component {
  render() {
    return (
      <div className="Support">
        <div className="Support-Top">
          <div className="Main-Text-Wrap">
            <h1>
              Welcome to <br />
              Beats Support
            </h1>
          </div>
          <div className="Main-Img">
            <img src={Config.SupportHeroImg} alt="Main-top-img" />
          </div>
        </div>
        <div className="Support-Popular">
          <img
            src="https://www.beatsbydre.com/content/dam/beats-support/global/images/popular-topics-gray.jpg.large.1x.jpg"
            alt="popular topics"
          />
        </div>
      </div>
    );
  }
}
export default Support;
