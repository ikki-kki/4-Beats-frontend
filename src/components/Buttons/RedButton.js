import React, { Component } from "react";
import "./RedButton.scss";

export default class RedButton extends Component {
  render() {
    return <div className="RedButton">{this.props.text}</div>;
  }
}
