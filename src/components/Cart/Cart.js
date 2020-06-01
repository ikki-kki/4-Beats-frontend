import React, { Component } from "react";
import CartLists from "./CartLists/CartLists";
import "./Cart.scss";
import WhiteBorderButton from "../Buttons/WhiteBorderButton";
export default class Cart extends Component {
  constructor() {
    super();
    this.state = {
      showCart: false,
      response: [],
      product: "",
      color: "",
    };
  }

  componentDidMoute() {
    const token = localStorage.getItem("token");
    console.log(token);
    fetch("http://10.58.5.168:8000/api/product/1/Black", {
      method: "GET",
      headers: {
        Authorization: token,
        "Content-Type": "application/json",
      },
    })
      .then((res) => res.json())
      .then((res) => {
        this.setState({
          response: res,
        });
      });
  }

  render() {
    return (
      <div className={`Cart ${this.props.showCart ? "" : "cartOpen"}`}>
        <div className="cartProducts">
          <div className="cartHeader">
            <div className="titleLable">Cart</div>
            <div className="colorLabel">Color</div>
            <div className="quantityLabel">Quantity</div>
            <button
              className={`headerClose ${this.props.showCart ? "" : "cartOpen"}`}
              onClick={() => this.props.clickHandler()}
            >
              <span className="material-icons">close</span>
            </button>
          </div>
          <ul className="cartProductsList">
            {this.state.response.map((el, i) => (
              <CartLists
                key={i}
                product={el.name}
                color={el.color}
                price={el.price}
              />
            ))}
          </ul>
        </div>
        <div className="cartSummary">
          <div className="notice">
            <span>Enjoy free shipping on all products</span>
          </div>
          <div className="items">
            <h5>Subtotal (Tax included)</h5>
            <span>₩ 95,000</span>
          </div>
          <div className="buyBtn">
            <WhiteBorderButton text="paymont" link="/order" />
          </div>
        </div>
      </div>
    );
  }
}
