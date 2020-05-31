import React, { Component } from "react";
import { Link } from "react-router-dom";
import RedButton from "../../Buttons/RedButton";
import "./CartHeader.scss";

export default class CartHeader extends Component {
  render() {
    return (
      <header className="BuyHeader">
        <nav className="header-nav">
          <div className="nav-container">
            <p>Powerbeats</p>
            <div>
              <Link className="color" to="/product">
                white
              </Link>
              <span className="price">$192.68</span>
            </div>
            <RedButton text="add to bag" />
          </div>
        </nav>
      </header>
    );
  }
}
