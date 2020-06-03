import React, { Component } from "react";
import "./GoTop.scss";
export class GoTop extends Component {
  scrollToTop() {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  }

  render() {
    return (
      <div className="goUp" onClick={() => this.scrollToTop()}>
        <span className="material-icons">keyboard_arrow_up</span>
      </div>
    );
  }
}

export default GoTop;
