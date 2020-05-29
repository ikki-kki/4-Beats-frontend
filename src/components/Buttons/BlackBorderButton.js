import React, { Component } from "react";
import { Link } from "react-router-dom";
import "./BlackBorderButton.scss";

export default class BlackBorderButton extends Component {
  render() {
    return (
      <Link to="/" className="BlackBorderButton">
        {this.props.text}
      </Link>
    );
  }
}
