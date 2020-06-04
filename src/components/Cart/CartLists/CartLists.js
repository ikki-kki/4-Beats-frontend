import React, { Component } from "react";
import { Link } from "react-router-dom";
import { API } from "../../../config";
import "./CartLists.scss";

export default class CartLists extends Component {
  constructor(props) {
    super(props);
    this.state = {
      quantity: 1,
      totalCount: 0,
    };
  }

  updateQuantity = (modifier) => {
    const { price } = this.props; // 통과

    // 최대 최소값 범위
    const minimum = this.props.min || 1;
    const maximum = this.props.max || 100; // 양수 무한대

    // 업데이트된 수량의 값
    const quantity = this.state.quantity + modifier;

    // 최대 최소값 예외처리
    if (quantity < minimum || maximum < quantity) {
      return;
    }
    // state를 업데이트
    this.setState(
      {
        quantity: quantity,
      },
      () => {
        let itemId = this.props.item_id;
        let countTotalPrice;

        if (modifier === -1) {
          countTotalPrice = this.props.totalPrice - price;
        } else {
          countTotalPrice = this.props.totalPrice + price;
        }
        this.props.addHandler(countTotalPrice, quantity, itemId);
      }
    );
  };

  deleteData = () => {
    const token = localStorage.getItem("token");
    fetch(`${API}/cart/${this.props.id}`, {
      method: "DELETE",
      headers: {
        Authorization: token,
        "Content-Type": "application/json",
      },
    }).then((res) => console.log("delete res: ", res));
  };

  render() {
    const { product, color, price } = this.props;

    let productPrice = (price * this.state.quantity).toFixed(2);

    return (
      <>
        <li className="CartLists" showcart={this.props.showcart}>
          <div className="productContainer">
            <Link className="productName" to="">
              {product}
            </Link>
            <div className="productColor">{color}</div>
          </div>
          <div className="productQuantity">
            <button
              className="minusBtn"
              onClick={() => this.updateQuantity(-1)}
            >
              -
            </button>
            <div className="productCount">
              <span className="count">{this.state.quantity}</span>
            </div>
            <button className="plusBtn" onClick={() => this.updateQuantity(1)}>
              +
            </button>
            <div className="productRemove">
              <button onClick={() => this.deleteData()}>remove</button>
            </div>
          </div>
          <div className="productPrice">
            <span>$&nbsp;</span>
            <span>{productPrice}</span>
          </div>
        </li>
      </>
    );
  }
}
