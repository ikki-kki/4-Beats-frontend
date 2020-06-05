import React from "react";
import ProductSpec2 from "../../ProductHeader/ProductSpec/ProductSpec2";
import RedButton from "../../../../../components/Buttons/RedButton";
import { API } from "../../../../../config";
import "./DetailCard.scss";

class DetailCard extends React.Component {
  state = {
    current: 0,
  };
  // order 버튼 눌렀을 때 fetch 함수 실행
  sendProduct = (id) => {
    const token = localStorage.getItem("Authorization");
    fetch(`${API}/product/${id}/${this.state.current}/cart`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: token,
      },
      body: JSON.stringify({
        text: "order",
      }),
    }).then((res) => {
      if (res.status === 200) {
        alert("OK");
      } else {
        alert("try again");
      }
    });
  };

  // color 선택 함수
  selectColor = (colorID) => {
    this.setState({ current: colorID });
  };

  render() {
    const {
      id,
      name,
      image,
      subject,
      description,
      specLists,
      price,
      color,
    } = this.props;
    console.log(this.state.current);
    return (
      <section className="DetailCard">
        <div className="headerContentsWrapper">
          <div className="headerText">
            <h1>{name}</h1>
            <div className="subWrap">
              <span className="subTitle">{subject}</span>
              <div className="subBody">{description}</div>
            </div>
            <div className="buyWrap">
              <div
                className="item1"
                style={{ backgroundColor: color[0].hex }}
                id={color[0].id}
                onClick={() => this.selectColor(color[0].id)}
              >
                <span
                  className={`checkedWhite white ${
                    this.state.current === color[0].id ? "checked" : ""
                  }`}
                />
              </div>
              <div
                className="item1"
                style={{ backgroundColor: color[1].hex }}
                id={color[1].id}
                onClick={() => this.selectColor(color[1].id)}
              >
                <span
                  className={`checkedWhite white ${
                    this.state.current === color[1].id ? "checked" : ""
                  }`}
                />
              </div>
              <div
                className="item1"
                style={{ backgroundColor: color[2].hex }}
                id={color[2].id}
                onClick={() => this.selectColor(color[2].id)}
              >
                <span
                  className={`checkedWhite white ${
                    this.state.current === color[2].id ? "checked" : ""
                  }`}
                />
              </div>
              <div className="buyBtn">
                <div className="btnWrapper">
                  <RedButton
                    text="ADD TO CART"
                    sendProduct={() => this.sendProduct(id)}
                  />
                </div>
              </div>
              <div className="price">
                <span>{price}</span>
              </div>
            </div>
            <div className="iconWrap">
              <ProductSpec2 text={specLists[0].item_info} />
              <ProductSpec2 text={specLists[1].item_info} />
              <ProductSpec2 text={specLists[2].item_info} />
            </div>
          </div>
        </div>
        <div className="headerImage">
          <div className="gradientOverlay"></div>
          <img alt="powerbeats" src={image} />
        </div>
      </section>
    );
  }
}

export default DetailCard;
