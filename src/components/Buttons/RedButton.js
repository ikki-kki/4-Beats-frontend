import React, { Component } from "react";
import { Link } from "react-router-dom";
import "./RedButton.scss";

export default class RedButton extends Component {
  render() {
    return (
      <Link to={this.props.link} className="RedButton">
        {this.props.text}
      </Link>
    );
  }
}
