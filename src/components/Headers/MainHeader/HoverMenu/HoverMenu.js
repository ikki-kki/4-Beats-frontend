import React, { Component } from "react";
import { headerData } from "../../../../utils/HeaderData/HeaderData";
import { headerMain } from "../../../../utils/HeaderData/HeaderData";
import { Link } from "react-router-dom";
import { withRouter } from "react-router-dom";

import "./HoverMenu.scss";
class HoverMenu extends Component {
  constructor(props) {
    super(props);
    this.state = {
      test: "constructor오류 해결을 위한 임시 state",
    };
  }

  toProducts = () => {
    this.props.history.push("/products");
  };
  toProductsDetail = () => {
    this.props.history.push("/products/detail");
  };

  render() {
    return (
      <div className="HoverMenu">
        <div className="main-img-box">
          {headerMain[this.props.id].map((data, i) => {
            return (
              <img
                className="main-img"
                key={i}
                src={data.img}
                onClick={this.toProducts}
                alt=""
              />
            );
          })}
        </div>
        <div className="sub-imgs-container">
          {headerData[this.props.id].map((data, i) => {
            return (
              <div
                className="sub-imgs-box"
                key={i}
                onClick={this.toProductsDetail}
              >
                <img className="sub-img" src={data.img} alt="" />
                <span className="sub-image-title">{data.name}</span>
              </div>
            );
          })}
        </div>
      </div>
    );
  }
}
//sub-imgs-container를 맵돌고 그것들을 변수에 저장해서 넣기
export default withRouter(HoverMenu);
