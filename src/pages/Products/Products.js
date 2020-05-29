import React from "react";
import { withRouter } from "react-router-dom";
import ProductsArticles from "./ProductsArticles/ProductsArticles";

class Products extends React.Component {
  constructor() {
    super();
    this.state = {
      productsList: [],
      productsListSec: {
        sec1: [],
        sec2: [],
        sec3: [],
        sec4: [],
        sec5: [],
        sec6: [],
      },
    };
  }
  componentDidMount() {
    fetch("http://localhost:3001/data/productList.json")
      .then((res) => res.json())
      // .then(res => console.log(res))
      .then((res) =>
        this.setState({
          productsList: res,
        })
      );
  }
  render() {
    return (
      <>
        <ProductsArticles lists={this.state.productsList.data} />
      </>
    );
  }
}

export default withRouter(Products);
