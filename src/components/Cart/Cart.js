import React, { Component } from "react";
import CartLists from "./CartLists/CartLists";
import WhiteBorderButton from "../Buttons/WhiteBorderButton";
import "./Cart.scss";

export default class Cart extends Component {
  constructor(props) {
    super(props);
    this.state = {
      totalPrice: 0,
    };
  }

  render() {
    const { sumAmount, addHandler, postPayment, response } = this.props;
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
            {response &&
              response.map((el, i) => {
                return (
                  <CartLists
                    key={i}
                    idx={i}
                    id={el.id}
                    item_id={el.item_id}
                    product={el.name}
                    color={el.color}
                    price={Number(el.price)}
                    totalPrice={Number(sumAmount)}
                    addHandler={addHandler}
                  />
                );
              })}
          </ul>
        </div>
        <div className="cartSummary">
          <div className="notice">
            <span>Enjoy free shipping on all products</span>
          </div>
          <div className="items">
            <h5>Subtotal</h5>
            <span>${sumAmount}</span>
          </div>
          <div className="buyBtn" onClick={postPayment}>
            <WhiteBorderButton text="paymont" link="/order" />
          </div>
        </div>
      </div>
    );
  }
}
