import React, { Component } from "react";
import "./BlackBorderButton.scss";

export default class BlackBorderButton extends Component {
  render() {
    return (
      <div className="BlackBorderButton" onClick={this.props.clickHandler}>
        {this.props.text}
      </div>
    );
  }
}
