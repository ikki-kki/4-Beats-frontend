import React from "react";
import Config from "../Config";
import RedButton from "../../../components/Buttons/RedButton";
import "./ProductsDetailPage2.scss";

class ProductsDetailPage2 extends React.Component {
  render() {
    return (
      <div className="ProductsDetail_Pill">
        <section className="HeaderWrap">
          <div className="HeaderText">
            <div className="TextInner">
              <h1>
                Beats Pill
                <sup>
                  <b>+</b>
                </sup>
              </h1>
              <span>Portable Wireless Speaker</span>
              <div className="PriceBuyWrap">
                <div className="Price">$179.95</div>
                <div className="BuyBtnWrap">
                  <a
                    href="https://www.apple.com/shop/product/ML4M2LL/A/beats-pill-portable-speaker-black?cid=app_Beats_PillPlus_PDP_US_AOS_BeatsPillPlus"
                    className="BuyBtn"
                  >
                    <RedButton text={"Buy on"} link="/" />
                  </a>
                </div>
              </div>
            </div>
          </div>

          <div className="HeaderImg">
            <img src={Config.ProductsPillImg} alt="Main-Pill-img" />
          </div>
        </section>
      </div>
    );
  }
}
export default ProductsDetailPage2;
