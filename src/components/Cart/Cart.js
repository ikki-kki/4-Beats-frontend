import React, { Component } from "react";
import CartLists from "./CartLists/CartLists";
import "./Cart.scss";
import WhiteBorderButton from "../Buttons/WhiteBorderButton";

export default class Cart extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  shouldComponentUpdate(nextProps, nextState) {
    if (nextProps.response === this.props.response) {
      return false;
    } else {
      return true;
    }
  }

  render() {
    return (
      <div className="Cart">
        <div className="cartProducts">
          <div className="cartHeader">
            <div className="titleLable">Cart</div>
            <div className="colorLabel">Color</div>
            <div className="quantityLabel">Quantity</div>
            <button
              className="headerClose"
              onClick={() => this.props.clickHandler()}
            >
              <span className="material-icons">close</span>
            </button>
          </div>
          <ul className="cartProductsList">
            {this.props.response.data &&
              this.props.response.data.map((el, i) => {
                console.log("el: ", el);
                return (
                  <CartLists
                    key={i}
                    product={el.name}
                    color={el.color}
                    price={el.price}
                  />
                );
              })}
            {/* {cartListMap} */}
            {/* <CartLists /> */}
          </ul>
        </div>
        <div className="cartSummary">
          <div className="notice">
            <span>Enjoy free shipping on all products</span>
          </div>
          <div className="items">
            <h5>Subtotal</h5>
            <span>$ 95,000</span>
          </div>
          <div className="buyBtn">
            <WhiteBorderButton text="paymont" link="/order" />
          </div>
        </div>
      </div>
    );
  }
}
