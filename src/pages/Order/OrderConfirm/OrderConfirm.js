import React from "react";
import MainHeader from "../../../components/Headers/MainHeader/MainHeader";
// import OrderList from "../OrderList/OrderList";
// import OrderPiceList from "../OrderPiceList";
// import CustomerInfo from "../CustomerInfo";
import MainFooter from "../../../components/Footers/MainFooter/MainFooter";
import "./OrderConfirm.scss";

class OrderConfirm extends React.Component {
  render() {
    return (
      <>
        <MainHeader />
        <div className="OrderConfirm">
          <section className="orderHeader">
            <h2>ORDER</h2>
            <div className="currentLocation">
              <span className="this">Order</span>
              <i className="fas fa-angle-down"></i>
              <span className="end current">Order confirmed</span>
            </div>
          </section>
          <div className="tableWrap">
            <h3 className="tableTitle">Ordered</h3>
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
                  {/* {this.state.orderList &&
                    this.state.orderList.map((post, idx) => (
                      <OrderList
                        key={idx}
                        name={post.name}
                        img={post.image_url[0].image_url}
                        color={post.color}
                        amount={post.amount}
                        price={post.price}
                      />
                    ))} */}
                </tbody>
              </table>
              {/* {this.state.orderList &&
                this.state.orderList.map((mon, idx) => (
                  <OrderPiceList key={idx} totalPrice={mon.totalPrice} />
                ))} */}
            </section>
          </div>
        </div>
        <MainFooter />
      </>
    );
  }
}

export default OrderConfirm;
