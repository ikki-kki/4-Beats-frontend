import React from "react";
import MainHeader from "../../../components/Headers/MainHeader/MainHeader";
import OrderList from "../OrderList/OrderList";
import MainFooter from "../../../components/Footers/MainFooter/MainFooter";
import { API } from "../../../config";
import "./OrderConfirm.scss";

class OrderConfirm extends React.Component {
  state = {
    userInfo: [],
  };
  componentDidMount() {
    const token = localStorage.getItem("Authorization");
    fetch(`${API}/order`, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        Authorization: token,
      },
    })
      .then((res) => res.json())
      .then((res) =>
        this.setState({
          userInfo: res.data[0],
        })
      );
  }
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
                  {this.state.userInfo.cart &&
                    this.state.userInfo.cart.map((post, idx) => (
                      <OrderList
                        key={idx}
                        name={post.name}
                        img={post.image_url[0].image_url}
                        color={post.color}
                        amount={post.amount}
                        price={post.price}
                      />
                    ))}
                </tbody>
              </table>
              {/* {this.state.orderList &&
                this.state.orderList.map((mon, idx) => (
                  <OrderPriceList key={idx} totalPrice={mon.totalPrice} />
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
