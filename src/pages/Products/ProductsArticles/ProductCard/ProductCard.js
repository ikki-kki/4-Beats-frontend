import React from "react";
import { Link } from "react-router-dom";

class ProductCard extends React.Component {
  render() {
    const { name, image, title, specLists, price } = this.props;

    return (
      <section className="productContent">
        <div className="contentWrapper">
          <div className="ProductInfoWrapper">
            <p className="subTitle">{name}</p>
            <div className="mainTitle">
              <p>{title}</p>
            </div>
            <div className="colorCurcle1">
              <div className="colorCurcle2">
                <div className="colorCurcle3">&nbsp;</div>
              </div>
            </div>
            <ul className="productInfoList">
              {specLists.map((list, idx) => (
                <li>
                  <span>{list}</span>
                </li>
              ))}
            </ul>
            <p className="price">
              <span>{price}</span>
            </p>
            <Link to="/products/detail" className="btnWrapper">
              <span>Learn More</span>
            </Link>
          </div>
          <div className="productImageWrapper">
            <img alt="powerbeats" src={image} />
          </div>
        </div>
        <div className="sectionSpacingEnd"></div>
      </section>
    );
  }
}

export default ProductCard;
