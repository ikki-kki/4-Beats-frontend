import React, { Component } from "react";
import { Link } from "react-router-dom";
import "./WhiteBorderButton.scss";

export default class WhiteBorderButton extends Component {
  constructor() {
    super();
    this.state = {};
  }
  render() {
    return (
      <Link to="/" className="WhiteBorderButton">
        see more
      </Link>
    );
  }
}
