import React, { Component } from "react";
import { Link } from "react-router-dom";
import "./CartLists.scss";

export default class CartLists extends Component {
  constructor(props) {
    super(props);
    this.state = {
      quantity: 1,
      price: 0,
    };
  }

  //제품 추가, 삭제 메서드
  quantityMinus = (num) => {
    const { quantity } = this.state;
    if (quantity !== 1) {
      this.setState({ quantity: quantity + num });
    }
  };
  quantityAdd = (num) => {
    const { quantity } = this.state;
    this.setState({ quantity: quantity + num });
  };

  render() {
    const { product, color, price } = this.props;

    return (
      <li className="CartLists">
        <div className="productContainer">
          <Link className="productName" to="">
            {product}
          </Link>
          <div
            className="productColor"
            style={{ backgroundColor: color }}
          ></div>
        </div>
        <div className="productQuantity">
          <button className="minusBtn" onClick={() => this.quantityMinus(-1)}>
            -
          </button>
          <div className="productCount">
            <span className="count">{this.state.quantity}</span>
          </div>
          <button className="plusBtn" onClick={() => this.quantityAdd(1)}>
            +
          </button>
          <div className="productRemove">
            <button>remove</button>
          </div>
        </div>
        <div className="productPrice">
          <span>₩</span>
          <span>{price}</span>
        </div>
      </li>
    );
  }
}
