import React, { Component } from "react";
import { Link } from "react-router-dom";
import "./GrayBorderButton.scss";

export default class GrayBorderButton extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <Link to="/" className="GrayBorderButton">
        {this.props.text}
      </Link>
    );
  }
}
