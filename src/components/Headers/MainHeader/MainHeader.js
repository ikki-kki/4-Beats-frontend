import React, { Component } from "react";
import { Link } from "react-router-dom";
import HoverMenu from "./HoverMenu/HoverMenu";
import "./MainHeader.scss";

export default class MainHeader extends Component {
  constructor() {
    super();
    this.state = {
      menuIdx: 0,
      clickMenu: "none",
    };
  }

  menuHandler = (e) => {
    console.log(e.target.id);
    if (e.target.id === "Earphones") {
      this.setState({ menuIdx: 0 });
    } else if (e.target.id === "HeadPhones") {
      this.setState({ menuIdx: 1 });
    } else if (e.target.id === "Speaker") {
      this.setState({ menuIdx: 2 });
    }
  };

  clickMenuHandler = () => {
    this.setState({ clickMenu: "flex" });
  };

  render() {
    //console.log(this.state.menuIdx)
    return (
      <main
        style={{
          height: "100vh",
          width: "100%",
          background: "blue",
          margin: "0 auto",
        }}
      >
        <nav className="header-nav">
          <ul className="nav-container">
            <li>
              <Link to="/" className="headerLink">
                <img
                  className="logo"
                  alt=""
                  src="https://www.beatsbydre.com/content/dam/beats/global/logos/beats-logo-161616.png"
                />
              </Link>
            </li>
            <li>
              <Link to="/" className="headerLink">
                STORIES
              </Link>
              <div
                className="hovermenu"
                id="products"
                onClick={this.clickMenuHandler}
              >
                <Link to="" className="headerLink">
                  PRODUCTS
                </Link>
                <span className="material-icons">expand_more</span>
              </div>
              <Link to="/support" className="headerLink">
                SUPPORT
              </Link>
            </li>
            <li>
              <button className="login">LOGIN</button>
              <button className="btnDefault" type="button"></button>
            </li>
          </ul>
          <div
            className="hover-container"
            style={{ display: this.state.clickMenu }}
          >
            <ul className="hover-ul">
              <span>PRODUCTS</span>
              <li
                className="hover-menus"
                id="Earphones"
                onMouseEnter={this.menuHandler}
              >
                Earphones
              </li>
              <li
                className="hover-menus"
                id="HeadPhones"
                onMouseEnter={this.menuHandler}
              >
                HeadPhones
              </li>
              <li
                className="hover-menus"
                id="Speaker"
                onMouseEnter={this.menuHandler}
              >
                Speaker
              </li>
            </ul>
            <HoverMenu name={this.state.menuIdx} />
          </div>
        </nav>
      </main>
    );
  }
}
