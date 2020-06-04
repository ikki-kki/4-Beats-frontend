import React from "react";
import "./OrderList.scss";

class OrderList extends React.Component {
  render() {
    return (
      <>
        <h3 className="tableTitle">Product</h3>
        <section className="productTable">
          <table>
            <thead>
              <tr>
                <th className="productN">Product</th>
                <th>Color</th>
                <th>Quantity</th>
                <th>Price</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className="productImageName">
                  <div className="infoWrap">
                    <div className="productImg">
                      <img
                        alt="Powerbeats"
                        src="https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/MWNX2?wid=800&hei=800&fmt=jpeg&qlt=95&op_usm=0.5,1.5&fit=constrain&.v=1586808416047"
                      />
                    </div>
                    <div className="productInfo">
                      <span>Powerbeats</span>
                    </div>
                  </div>
                </td>
                <td className="taC productColor">
                  <span>Red</span>
                </td>
                <td className="taC productQuantity">1</td>
                <td className="taC productPrice">$149.95</td>
              </tr>
            </tbody>
          </table>
        </section>
        <div className="priceBox">
          <div className="priceWrap">
            <span>Subtotal</span>
            <span className="subPrice">$ 149.95</span>
            <span className="priceCarculate">+</span>
            <span>Shipping</span>
            <span className="subPrice">$ 6.00</span>
            <span className="priceCarculate">=</span>
            <span>Order Total</span>
            <span className="totalPrice">$ 155.95</span>
          </div>
        </div>
      </>
    );
  }
}

export default OrderList;
