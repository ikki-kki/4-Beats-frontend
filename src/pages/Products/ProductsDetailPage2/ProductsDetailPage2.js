import React from "react";
import Config from "../Config";
import "./ProductsDetailPage2.scss";

class ProductsDetailPage2 extends React.Component {
  render() {
    return (
      <div className="ProductsDetail_Pill">
        <section className="Header">
          <div className="HeaderWrap">
            <div className="Text">
              <div className="TextContainer">
                <div className="TextInner">
                  <h1>
                    Beats Pill
                    <sup>
                      <b>+</b>
                    </sup>
                  </h1>
                  <p>Portable Wireless Speaker</p>
                  <div className="Price">
                    <div className="PriceHolder">$179.95</div>
                  </div>
                </div>
              </div>
            </div>
            <img src={Config.ProductsPillImg} alt="Main-Pill-img" />
          </div>
        </section>
        <section></section>
        <section></section>
        <section></section>
        <section></section>
        <section></section>
        <section></section>
      </div>
    );
  }
}
export default ProductsDetailPage2;
