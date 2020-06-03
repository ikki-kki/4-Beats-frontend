import React from "react";
import ProductSpec2 from "../../ProductHeader/ProductSpec/ProductSpec2";
import RedButton from "../../../../../components/Buttons/RedButton";
import "./DetailCard.scss";

class DetailCard extends React.Component {
  render() {
    const { name, image, subject, description, specLists, price } = this.props;
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
              <div className="buyBtn">
                <a href="#buy" className="btnWrapper">
                  <RedButton text="Buy" />
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
