import React, { Component } from "react";
import { Link } from "react-router-dom";
import { withRouter } from "react-router-dom";
import HoverMenu from "./HoverMenu/HoverMenu";
import WhiteBorderButton from "../../Buttons/WhiteBorderButton";
import SignInUp from "../../../pages/SignInUp/SignInUp";
//import Cart from "../../Cart/Cart";
import "./MainHeader.scss";

class MainHeader extends Component {
  constructor() {
    super();
    this.state = {
      menuIdx: 0,
      display: "none",
      menuHidden: false,
    };
  }
  //라우터 이동 메서드
  // toProducts = () => {
  //   this.props.history.push("/products");
  // };

  //view 관련 매서드
  menuHandler = (id) => {
    this.setState({ menuIdx: id });
  };

  hoverMenuHandler = () => {
    this.setState({ display: "flex" });
  };

  outMenuHandler = () => {
    this.setState({ display: "none" });
  };

  render() {
    return (
      <header className="MainHeader">
        <nav className="header-nav">
          {/* <Cart /> */}
          <ul className="nav-container">
            <li className="navMenus">
              <Link to="/" className="headerLink">
                <img
                  className="logo"
                  alt=""
                  src="https://www.beatsbydre.com/content/dam/beats/global/logos/beats-logo-161616.png"
                />
              </Link>
            </li>
            <li className="navMenus" onMouseEnter={this.outMenuHandler}>
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
                <Link to="/products" className="headerLink">
                  PRODUCTS
                </Link>
                <span className="material-icons hovermenuIcon">
                  expand_more
                </span>
              </div>
              <Link
                to="/support"
                className="headerLink"
                onMouseEnter={this.outMenuHandler}
              >
                SUPPORT
              </Link>
            </li>
            {/* 로그인이랑 연결 */}
            <li className="navMenus">
              <button className="login">
                <SignInUp />
              </button>
              <button className="btnDefault" type="button"></button>
            </li>
          </ul>
          <div
            className="hover-container"
            onMouseLeave={this.outMenuHandler}
            style={{ display: this.state.display }}
          >
            <ul className="hover-ul">
              <span className="hoverTitle">PRODUCTS</span>
              <li
                className="hover-menus"
                id="Earphones"
                onMouseEnter={() => this.menuHandler(0)}
              >
                Earphones
              </li>
              <li
                className="hover-menus"
                id="HeadPhones"
                onMouseEnter={() => this.menuHandler(1)}
              >
                HeadPhones
              </li>
              <li
                className="hover-menus lastChild"
                id="Speaker"
                onMouseEnter={() => this.menuHandler(2)}
              >
                Speaker
              </li>
              <WhiteBorderButton text="SEE MORE" link="/products" />
            </ul>
            <HoverMenu id={this.state.menuIdx} />
          </div>
        </nav>
      </header>
    );
  }
}
export default withRouter(MainHeader);
