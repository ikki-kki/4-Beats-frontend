import React, { Component } from "react";
import { Link } from "react-router-dom";
import "./CartLists.scss";

export default class CartLists extends Component {
  render() {
    return (
      <li className="CartLists">
        <div className="productContainer">
          <Link className="productName" to="">
            This is product Test
          </Link>
          <div className="productColor"></div>
        </div>
        <div className="productQuantity">
          <button className="minusBtn">-</button>
          <div className="productCount">
            <span className="count">1</span>
          </div>
          <button className="plusBtn">+</button>
          <div className="productRemove">
            <button>remove</button>
          </div>
        </div>
        <div className="productPrice">₩ 95,000</div>
      </li>
    );
  }
}
