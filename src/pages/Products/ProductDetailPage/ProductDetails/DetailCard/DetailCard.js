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
    fetch(`${API}/product/${id}/${this.state.current}/cart`, {
      method: "POST",
    }).then((res) => {
      if (res.status === 200) {
        this.props.history.push("/ordered");
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
    } = this.props;
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
              <div className="item1" onClick={() => this.selectColor()}>
                <span
                  className={`checkedWhite white ${
                    this.state.current === 0 ? "checked" : ""
                  }`}
                />
              </div>
              <div className="item1" onClick={() => this.selectColor()}>
                <span
                  className={`checkedWhite white ${
                    this.state.current === 0 ? "checked" : ""
                  }`}
                />
              </div>
              <div className="item1" onClick={() => this.selectColor()}>
                <span
                  className={`checkedWhite white ${
                    this.state.current === 0 ? "checked" : ""
                  }`}
                />
              </div>
              <div className="buyBtn">
                <a href="#buy" className="btnWrapper">
                  <RedButton
                    text="Buy"
                    sendProduct={() => this.sendProduct(id)}
                  />
                </a>
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
