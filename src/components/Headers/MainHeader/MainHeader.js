import React, { Component } from "react";
import { Link } from "react-router-dom";
import { withRouter } from "react-router-dom";
import HoverMenu from "./HoverMenu/HoverMenu";
import WhiteBorderButton from "../../Buttons/WhiteBorderButton";
import SignInUp from "../../../pages/SignInUp/SignInUp";
import UserName from "../../../pages/SignInUp/UserName";
import Cart from "../../Cart/Cart";
import "./MainHeader.scss";

class MainHeader extends Component {
  constructor() {
    super();
    this.state = {
      menuIdx: 0,
      display: "none",
      showCart: false,
      response: [],
      sumAmount: 0,
      count: 0,
    };
  }

  //메뉴 hover 관련 핸들러
  menuHandler = (id) => {
    this.setState({ menuIdx: id });
  };

  hoverMenuHandler = () => {
    this.setState({ display: "flex" });
  };

  outMenuHandler = () => {
    this.setState({ display: "none" });
  };

  addCartHandler = (test) => {
    this.setState({
      sumAmount: Number(test),
    });
  };

  //카트 버튼 클릭 핸들러
  cartClickHandler = () => {
    this.setState({ showCart: !this.state.showCart });
    fetch("http://localhost:3002/data/productModk.json", {
      method: "GET",
      headers: {
        // Authorization:
        //   "eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpZCI6NX0.AY_p0-u1GLfQJB9E8hAhcE467blaITgrJ8SptpVZBSU",
        "Content-Type": "application/json",
      },
    })
      .then((res) => res.json())
      .then((res) => {
        let sum = 0;

        res.data.forEach((num) => (sum += num.price));

        this.setState({
          response: res,
          sumAmount: sum,
        });
      });
  };

  render() {
    console.log("sdfsdf: ", this.state.sumAmount);
    return (
      <>
        {this.state.showCart && (
          <Cart
            showCart={this.state.showCart}
            clickHandler={this.cartClickHandler}
            response={this.state.response}
            sumAmount={this.state.sumAmount}
            addHandler={this.addCartHandler}
            //여기서 실행되지 않는 함수는 콜백 하지 않아도 된디.
          />
        )}

        <header className="MainHeader">
          <nav className="header-nav">
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
                  <UserName />
                </button>
                <button
                  className="btnDefault"
                  type="button"
                  onClick={() => this.cartClickHandler()}
                >
                  {/* 장바구니에 아이템이 들어오면 span이 생김 */}
                  {this.state.count > 0 && <span>{this.state.count}</span>}
                </button>
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
                  className="hover-menus"
                  id="Speaker"
                  onMouseEnter={() => this.menuHandler(2)}
                >
                  Speaker
                </li>
                <div className="buttonBottom">
                  <WhiteBorderButton text="SEE MORE" link="/products" />
                </div>
              </ul>
              <HoverMenu id={this.state.menuIdx} />
            </div>
          </nav>
        </header>
      </>
    );
  }
}
export default withRouter(MainHeader);
