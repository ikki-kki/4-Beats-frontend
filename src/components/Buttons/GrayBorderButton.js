import React, { Component } from "react";
import { Link } from "react-router-dom";
import "./GrayBorderButton.scss";

export default class GrayBorderButton extends Component {
  render() {
    return (
      <Link to={this.props.link} className="GrayBorderButton">
        {this.props.text}
      </Link>
    );
  }
}
