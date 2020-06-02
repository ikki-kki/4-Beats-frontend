import React from "react";
import ProductHeader from "../ProductHeader/ProductHeader";
import Config from "../../Config";

class ProductDetails extends React.Component {
  render() {
    return (
      <section className="headerWrapper">
        <ProductHeader goTo="#color" />
        <div className="headerImage">
          <div className="gradientOverlay"></div>
          <img
            alt="powerbeats"
            src={`${Config.detailImage}01.jpg.large.2x.jpg`}
          />
        </div>
      </section>
    );
  }
}

export default ProductDetails;
