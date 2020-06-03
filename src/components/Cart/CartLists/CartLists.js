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

  updateQuantity = (modifier) => {
    // 최대 최소값 범위
    const minimum = this.props.min || 1;
    const maximum = this.props.max || Number.POSITIVE_INFINITY; // 양수 무한대

    // 업데이트된 수량의 값
    const quantity = this.state.quantity + modifier;

    // 최대 최소값 예외처리
    if (quantity < minimum || maximum < quantity) {
      return;
    }

    // state를 업데이트
    this.setState({
      quantity,
    });
  };

  deleteData(item) {
    fetch("http://10.58.5.168:8000/api/cart/" + item, {
      method: "delete",
    }).then((res) =>
      res.json().then((json) => {
        return json;
      })
    );
  }

  render() {
    const { product, color, price } = this.props;
    let productPrice = (price * this.state.quantity).toFixed(2);
    //let totalPrice =

    return (
      <>
        <li className="CartLists" showCart={this.props.showCart}>
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
