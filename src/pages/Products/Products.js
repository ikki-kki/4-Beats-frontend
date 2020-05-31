import React from "react";
import { withRouter } from "react-router-dom";
import ProductsArticles from "./ProductsArticles/ProductsArticles";

class Products extends React.Component {
  constructor() {
    super();
    this.state = {
      productsList: [],
      sec1: [],
      sec2: [],
      sec3: [],
      sec4: [],
      sec5: [],
      sec6: [],
    };
  }

  componentDidMount() {
    fetch("http://10.58.5.168:8000/api/product")
      .then((res) => res.json())
      // .then(res => console.log(res))
      .then((res) =>
        this.setState({
          productsList: res.data,
        })
      )
      .then((res) => {
        this.setState({
          sec1: this.state.productsList.filter((res) => {
            return res.theme === "HIGH‑PERFORMANCE WIRELESS EARPHONES";
          }),
          sec2: this.state.productsList.filter((res2) => {
            return res2.theme === "EVERYDAY WIRELESS ON‑EAR HEADPHONES";
          }),
          sec3: this.state.productsList.filter((res3) => {
            return res3.theme === "PREMIUM SOUND WIRELESS OVER‑EAR HEADPHONES";
          }),
          sec4: this.state.productsList.filter((res4) => {
            return res4.theme === "ALWAYS‑READY WIRELESS EARPHONES";
          }),
          sec5: this.state.productsList.filter((res5) => {
            return res5.theme === "WIRED OPTIONS";
          }),
          sec6: this.state.productsList.filter((res6) => {
            return res6.theme === "COMPACT YET POWERFUL WIRELESS SPEAKER";
          }),
        });
      });
  }

  render() {
    return (
      <>
        {/* <ProductsArticles lists={this.state.productsList} /> */}
        <ProductsArticles
          section1={this.state.sec1}
          section2={this.state.sec2}
          section3={this.state.sec3}
          section4={this.state.sec4}
          section5={this.state.sec5}
          section6={this.state.sec6}
        />
      </>
    );
  }
}

export default withRouter(Products);
