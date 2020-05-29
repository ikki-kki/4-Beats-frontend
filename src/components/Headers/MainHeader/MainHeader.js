import React, { Component } from "react";
import { Link } from "react-router-dom";
import HoverMenu from "./HoverMenu/HoverMenu";
import WhiteBorderButton from "../../Buttons/WhiteBorderButton";
import "./MainHeader.scss";

export default class MainHeader extends Component {
  constructor() {
    super();
    this.state = {
      menuIdx: 0,
      display: "none",
      menuHidden: false,
    };
    this.handleScroll = this.handleScroll.bind(this);
  }

  componentWillMount() {
    window.addEventListener("scroll", this.handleScroll);
  }

  componentWillUnmount() {
    window.removeEventListener("scroll", this.handleScroll);
  }

  handleScroll(e) {
    let lastScrollTop = 0;
    const currentScrollTop = MainHeader.scrollTop;

    if (!this.state.menuHidden && currentScrollTop > lastScrollTop) {
      this.setState({ menuHidden: true });
    } else if (this.state.hidden) {
      this.setState({ hidden: false });
    }
    lastScrollTop = currentScrollTop;
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

  hoverMenuHandler = () => {
    this.setState({ display: "flex" });
  };

  outMenuHandler = () => {
    this.setState({ display: "none" });
  };

  render() {
    return (
      <main
        style={{
          height: "100vh",
          width: "100%",
          background: "#f4f4f4",
          margin: "0 auto",
        }}
      >
        <header className="MainHeader" hidden={this.state.hidden}>
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
              <li onMouseEnter={this.outMenuHandler}>
                <Link
                  to="/"
                  className="headerLink"
                  onMouseEnter={this.outMenuHandler}
                >
                  STORIES
                </Link>
                <div
                  className="hovermenu"
                  id="products"
                  onMouseEnter={this.hoverMenuHandler}
                >
                  <Link to="" className="headerLink">
                    PRODUCTS
                  </Link>
                  <span className="material-icons">expand_more</span>
                </div>
                <Link
                  to="/support"
                  className="headerLink"
                  onMouseEnter={this.outMenuHandler}
                >
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
              onMouseLeave={this.outMenuHandler}
              style={{ display: this.state.display }}
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
                  className="hover-menus lastChild"
                  id="Speaker"
                  onMouseEnter={this.menuHandler}
                >
                  Speaker
                </li>
                <WhiteBorderButton />
              </ul>
              <HoverMenu name={this.state.menuIdx} />
            </div>
          </nav>
        </header>
      </main>
    );
  }
}
