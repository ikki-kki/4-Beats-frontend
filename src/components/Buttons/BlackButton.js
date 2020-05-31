import React, { Component } from "react";
import { Link } from "react-router-dom";
import "./BlackButton.scss";

export default class BlackButton extends Component {
  render() {
    return (
      <Link to="/" className="BlackButton">
        {this.props.text}
      </Link>
    );
  }
}
