import React from "react";
import { Link } from "react-router-dom";
import "./ProductCard.scss";
// const colorCircles = {
//   Powerbeats: ["#f1f1f1", "#2b2b2b", "#911827"],
//   2: ["#f7ede2", "#2b2b2b", "#374754", "#fff"],
//   3: ["#f7ede2", "#2b2b2b", "#374754", "#fff"],
// };

class ProductCard extends React.Component {
  render() {
    const { num, name, image, title, specLists, price } = this.props;
    console.log(name);
    // console.log(colorCircles.{name}[0]);
    return (
      <section className="productContent">
        <div className="contentWrapper">
          <div className="ProductInfoWrapper">
            <p className="subTitle">{name}</p>
            <div className="mainTitle">
              <p>{title}</p>
            </div>
            <div className={"item" + num}>
              <div className="colorCircle1">
                <div className="colorCircle2">&nbsp;</div>
              </div>
            </div>
            <ul className="productInfoList">
              {specLists.map((list, idx) => (
                <li>
                  <span key={idx}>{list.item_info}</span>
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
