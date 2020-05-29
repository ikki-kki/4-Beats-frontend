import React, { Component } from "react";
import { Link } from "react-router-dom";
import "./RedBorderButton.scss";

export default class RedBorderButton extends Component {
  constructor() {
    super();
    this.state = {};
  }
  render() {
    return (
      <Link to="/" className="RedBorderButton">
        sign up
      </Link>
    );
  }
}
