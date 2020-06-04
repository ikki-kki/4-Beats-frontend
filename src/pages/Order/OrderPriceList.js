import React from "react";

class OrderPriceList extends React.Component {
  state = {
    orderTotalSave: [],
  };
  render() {
    const { totalPrice } = this.props;
    const orderTotal = Number(totalPrice) + 6.0;
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
            <span className="totalPrice">{orderTotal}</span>
          </div>
        </div>
      </>
    );
  }
}

export default OrderPriceList;
