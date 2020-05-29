import React, { Component } from "react";
import "../../Buttons/RedButton";
import "./BuyHeader.scss";
import RedButton from "../../Buttons/RedButton";

export default class BuyHeader extends Component {
  render() {
    return (
      <header className="BuyHeader">
        <nav className="header-nav">
          <div className="nav-container">
            <p>Powerbeats</p>
            <RedButton text="buy" />
          </div>
        </nav>
      </header>
    );
  }
}
