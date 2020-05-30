import React from "react";
import { withRouter } from "react-router-dom";
import ProductCard from "./ProductCard/ProductCard";
import "./ProductsArticles.scss";

class ProductsArticles extends React.Component {
  render() {
    const { lists } = this.props;
    const makeCard =
      lists &&
      lists.map((list) => (
        <ProductCard
          key={list.item}
          num={list.item}
          image={list.product_image[0].image_url}
          name={list.name}
          title={list.description}
          specLists={list.item_info}
          price={list.price}
        />
      ));
    return (
      <div className="ProductsArticles">
        <hr className="seperateSection" />
        <section className="productTitle">
          <h2>
            High‑performance <br />
            wireless earphones
          </h2>
        </section>
        <div className="sectionSpacingStart"></div>
        {makeCard}
      </div>
    );
  }
}

export default withRouter(ProductsArticles);
