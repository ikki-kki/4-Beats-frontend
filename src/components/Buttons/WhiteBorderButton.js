import React, { Component } from "react";
import { Link } from "react-router-dom";
import "./WhiteBorderButton.scss";

export default class WhiteBorderButton extends Component {
  render() {
    return (
      <Link to="/" className="WhiteBorderButton">
        {this.props.text}
      </Link>
    );
  }
}
