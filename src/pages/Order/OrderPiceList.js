import React from "react";

class OrderPiceList extends React.Component {
  state = {
    orderTotal: [],
  };
  render() {
    const { totalPrice } = this.props;
    return (
      <>
        <div className="priceBox">
          <div className="priceWrap">
            <span>Subtotal</span>
            <span className="subPrice">{totalPrice}</span>
            <span className="priceCarculate">+</span>
            <span>Shipping</span>
            <span className="subPrice">$ 6.00</span>
            <span className="priceCarculate">=</span>
            <span>Order Total</span>
            <span className="totalPrice">{this.state.orderTotal}</span>
          </div>
        </div>
      </>
    );
  }
}

export default OrderPiceList;
