import React, { Component } from "react";
import { Link } from "react-router-dom";
import "./WhiteBorderButton.scss";

export default class WhiteBorderButton extends Component {
  render() {
    return (
      <Link to={this.props.link} className="WhiteBorderButton">
        {this.props.text}
      </Link>
    );
  }
}
