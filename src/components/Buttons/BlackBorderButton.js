import React, { Component } from "react";
import "./BlackBorderButton.scss";

export default class BlackBorderButton extends Component {
  render() {
    return <div className="BlackBorderButton">{this.props.text}</div>;
  }
}
