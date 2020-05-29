import React, { Component } from "react";
import { Link } from "react-router-dom";
import "./RedBorderButton.scss";

export default class RedBorderButton extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <Link to="/" className="RedBorderButton">
        {this.props.text}
      </Link>
    );
  }
}
