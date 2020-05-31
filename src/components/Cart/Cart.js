import React, { Component } from "react";
import CartLists from "./CartLists/CartLists";
import "./Cart.scss";
import WhiteBorderButton from "../Buttons/WhiteBorderButton";
export default class Cart extends Component {
  render() {
    return (
      <div className="Cart">
        <div className="cartProducts">
          <div className="cartHeader">
            <div className="titleLable">Cart</div>
            <div className="sizeLabel">Size</div>
            <div className="quantityLabel">Quantity</div>
            <button className="headerClose">
              <span class="material-icons">close</span>
            </button>
          </div>
          <ul className="cartProductsList">
            <CartLists />
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
            <WhiteBorderButton text="paymont" />
          </div>
        </div>
      </div>
    );
  }
}
