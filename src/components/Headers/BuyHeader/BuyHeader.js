import React, { Component } from "react";
import "./BuyHeader.scss";

export default class BuyHeader extends Component {
  render() {
    return (
      <header className="BuyHeader">
        <nav className="header-nav">
          <div className="nav-container">
            <p>Powerbeats</p>
            <button>BUY</button>
          </div>
        </nav>
      </header>
    );
  }
}
