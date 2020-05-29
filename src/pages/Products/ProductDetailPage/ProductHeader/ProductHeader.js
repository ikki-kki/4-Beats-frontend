import React from "react";
import ProductSpec from "./ProductSpec/ProductSpec";
import Config from "../../Config";
import "./ProductHeader.scss";

class ProductHeader extends React.Component {
  render() {
    return (
      <div className="headerContentsWrapper">
        <div className="headerText">
          <h1>Powerbeats</h1>
          <div className="subWrap">
            <span className="subTitle">Built to keep you moving</span>
            <div className="subBody">
              The latest addition to the Powerbeats family brings
              high-performance wireless earphones to your active life.
            </div>
          </div>
          <div className="buyWrap">
            <div className="buyBtn">
              <a href="#buy" className="btnWrapper">
                <span>Buy</span>
              </a>
            </div>
            <div className="price">
              <span>$149.95</span>
            </div>
          </div>
          <div className="iconWrap">
            <ProductSpec
              text="Up to 15 hours of listening time"
              url={`${Config.iconUrl}/BatteryW.png`}
            />
            <ProductSpec
              text="Sweat & water resistant earphones"
              url={`${Config.iconUrl}/W-small-waterproof.svg`}
            />
            <ProductSpec
              text="Streamlined, round cable"
              url={`${Config.iconUrl}/round_cableW.png`}
            />
          </div>
        </div>
      </div>
    );
  }
}

export default ProductHeader;
