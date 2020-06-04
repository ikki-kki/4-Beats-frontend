import React from "react";
import "./OrderList.scss";

class OrderList extends React.Component {
  render() {
      const { name, img, color, amount, price } = this.props
    return (
      <>
              <tr>
                <td className="productImageName">
                  <div className="infoWrap">
                    <div className="productImg">
                      <img
                        alt={name}
                        src={img}
                      />
                    </div>
                    <div className="productInfo">
                      <span>{name}</span>
                    </div>
                  </div>
                </td>
                <td className="taC productColor">
                  <span>{color}</span>
                </td>
                <td className="taC productQuantity">{amount}</td>
                <td className="taC productPrice">{price}</td>
              </tr>
      </>
    );
  }
}

export default OrderList;
