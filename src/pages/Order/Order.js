import React from "react";
import MainHeader from "../../components/Headers/MainHeader/MainHeader";
import MainFooter from "../../components/Footers/MainFooter/MainFooter";
import { API } from "../../config";
import "./Order.scss";
import OrderList from "./OrderList/OrderList";
import OrderPriceList from "./OrderPriceList";

class Order extends React.Component {
  inputValueRef = React.createRef();
  state = {
    orderList: [],
    userInfo: [],
    totalP: "",
    fullAddr: "",
    Postcode: "",
    cardCheck: false,
    RChecked: false,
  };

  searchHandler = () => {
    new window.daum.Postcode({
      oncomplete: function (data) {
        let fullAddress = data.address;
        let extraAddress = "";
        if (data.addressType === "R") {
          if (data.bname !== "") {
            extraAddress += data.bname;
          }
          if (data.buildingName !== "") {
            extraAddress +=
              extraAddress !== ""
                ? `, ${data.buildingName}`
                : data.buildingName;
          }
          fullAddress += extraAddress !== "" ? ` (${extraAddress})` : "";
        }
        document.getElementById("sample6_postcode").value = data.zonecode;
        document.getElementById("sample6_address").value = fullAddress;

        document.getElementById("sample6_datailAddress").focus();
      },
    }).open();
  };

  cardHandler = () => {
    this.setState({ cardCheck: true });
  };

  requiredHandler = () => {
    this.setState({ RChecked: true });
  };

  changePostCode = (e) => {
    this.setState({
      Postcode: e.target.value,
    });
  };
  test = () => {
    this.setState({ Postcode: this.fullAddress });
  };

  componentDidMount() {
    const token = localStorage.getItem("Authorization");
    fetch(`${API}/cart`, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        Authorization: token,
      },
    })
      .then((res) => res.json())
      .then((res) =>
        this.setState({
          orderList: res.data[0].cart_data,
          userInfo: res.data[0],
          totalP: res.data[0].total_price,
        })
      );
  }

  orderHandler = () => {
    const token = localStorage.getItem("Authorization");
    fetch(`${API}/order`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: token,
      },
      body: JSON.stringify({
        email: this.state.userInfo.email,
        full_name: this.state.userInfo.full_name,
        address: "address",
      }),
    }).then((res) => {
      if (res.status === 200) {
        alert("OK");
        this.props.history.push(`/order/confirm`);
      } else {
        alert("try again");
      }
    });
  };

  render() {
    return (
      <>
        <MainHeader />
        <div className="Order">
          <section className="orderHeader">
            <h2>ORDER</h2>
            <div className="currentLocation">
              <span className="this current">Order</span>
              <i className="fas fa-angle-down"></i>
              <span className="end">Order confirmed</span>
            </div>
          </section>
          <div className="tableWrap">
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
                  {this.state.orderList &&
                    this.state.orderList.map((post, idx) => (
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
              <OrderPriceList
                totalPrice={this.state.totalP && this.state.totalP}
              />
            </section>
            <section className="customerInfo">
              <h3>Customer Info</h3>
              <div className="infoTable">
                <table>
                  <tbody>
                    <tr>
                      <th className="nameTitle">Name</th>
                      <td>
                        <div className="inputWrap">
                          <input
                            type="text"
                            name="orderName"
                            value={this.state.userInfo.full_name}
                          />
                        </div>
                      </td>
                    </tr>
                    <tr>
                      <th className="nameTitle">E-mail</th>
                      <td>
                        <div className="inputWrap">
                          <input
                            type="text"
                            name="orderName"
                            value={this.state.userInfo.email}
                          />
                        </div>
                      </td>
                    </tr>
                    <tr>
                      <th className="nameTitle">Address</th>
                      <td className="addressArea">
                        <div className="addressSearch">
                          <span>
                            <input
                              type="text"
                              id="sample6_postcode"
                              placeholder="Post Code"
                              ref={this.inputValueRef}
                              onChange={this.changePostCode}
                              value={this.state.Postcode}
                            />
                          </span>
                          <button onClick={this.searchHandler}>Search</button>
                        </div>
                        <div className="addressDetail">
                          <span>
                            <input
                              type="text"
                              id="sample6_address"
                              placeholder="Address"
                              onChange={this.changeAddress}
                            />
                          </span>
                          <span>
                            <input
                              type="text"
                              id="sample6_datailAddress"
                              placeholder="Detail"
                              onChange={this.changeDetail}
                            />
                          </span>
                          <span>
                            <input
                              type="text"
                              id="sample6_extraAddress"
                              placeholder="Extra"
                              onChange={this.changeExtra}
                            />
                          </span>
                        </div>
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </section>
            <section className="howToOrder">
              <h3 className="payTitle">Payment</h3>
              <div className="checkPay">
                <div className="checkWrap">
                  <div className="checkTitle">Payment</div>
                  <div className="selection">
                    <div className="checkForm">
                      <input
                        type="radio"
                        name="creditCard"
                        className="radio"
                        checked={this.state.cardCheck}
                        onChange={this.cardHandler}
                      />
                      <span>Credit Card</span>
                    </div>
                  </div>
                </div>
              </div>
              <div className="lastBuy">
                <div className="priceBox">
                  <div className="priceWrap">
                    <span>Total price</span>
                    <span className="totalPrice">
                      ${" "}
                      {(Number(this.state.totalP) + 6.0).toLocaleString(
                        "en-US"
                      )}
                    </span>
                  </div>
                </div>
                <div className="requiredCheck">
                  <span className="checkWrap">
                    <input
                      type="checkbox"
                      className="checkbox require"
                      checked={this.state.Rchecked}
                      value={this.state.Postcode}
                      onChange={this.requiredHandler}
                    />
                    <strong>(Required)</strong>
                    <p>
                      I checked the payment information for the product. I want
                      to purchase, and I agree to proceed with the purchase.
                    </p>
                  </span>
                </div>
                <div className="buyBtn">
                  <button className="buyButton" onClick={this.orderHandler}>
                    Buy
                  </button>
                </div>
              </div>
            </section>
          </div>
        </div>
        <MainFooter />
      </>
    );
  }
}

export default Order;
