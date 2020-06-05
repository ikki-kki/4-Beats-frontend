import React from "react";
import { withRouter } from "react-router-dom";
import ProductCard from "./ProductCard/ProductCard";
import Fade from "react-reveal/Fade";
import "./ProductsArticles.scss";

class ProductsArticles extends React.Component {
  render() {
    // const { lists } = this.props;
    // const makeCard =
    //   lists &&
    //   lists.map((list) => (
    //     <ProductCard
    //       key={list.item}
    //       num={list.item}
    //       image={list.product_image[0].image_url}
    //       name={list.name}
    //       title={list.description}
    //       specLists={list.item_info}
    //       price={list.price}
    //     />
    //   ));
    const {
      section1,
      section2,
      section3,
      section4,
      section5,
      section6,
    } = this.props;
    const makeCard1 =
      section1 &&
      section1.map((list1) => (
        <ProductCard
          key={list1.item}
          num={list1.item}
          image={list1.product_image[0].image_url}
          name={list1.name}
          title={list1.description}
          specLists={list1.item_info}
          price={list1.price}
        />
      ));
    const makeCard2 =
      section2 &&
      section2.map((list2) => (
        <ProductCard
          key={list2.item}
          num={list2.item}
          image={list2.product_image[0].image_url}
          name={list2.name}
          title={list2.description}
          specLists={list2.item_info}
          price={list2.price}
        />
      ));
    const makeCard3 =
      section3 &&
      section3.map((list3) => (
        <ProductCard
          key={list3.item}
          num={list3.item}
          image={list3.product_image[0].image_url}
          name={list3.name}
          title={list3.description}
          specLists={list3.item_info}
          price={list3.price}
        />
      ));
    const makeCard4 =
      section4 &&
      section4.map((list4) => (
        <ProductCard
          key={list4.item}
          num={list4.item}
          image={list4.product_image[0].image_url}
          name={list4.name}
          title={list4.description}
          specLists={list4.item_info}
          price={list4.price}
        />
      ));
    const makeCard5 =
      section5 &&
      section5.map((list5) => (
        <ProductCard
          key={list5.item}
          num={list5.item}
          image={list5.product_image[0].image_url}
          name={list5.name}
          title={list5.description}
          specLists={list5.item_info}
          price={list5.price}
        />
      ));
    const makeCard6 =
      section6 &&
      section6.map((list6) => (
        <ProductCard
          key={list6.item}
          num={list6.item}
          image={list6.product_image[0].image_url}
          name={list6.name}
          title={list6.description}
          specLists={list6.item_info}
          price={list6.price}
        />
      ));
    return (
      <div className="ProductsArticles">
        <div className="sectionSpacingStart" />
        <Fade>
          <section className="productTitle">
            <h2>
              High‑performance
              <br />
              wireless earphones
            </h2>
          </section>
          <div className="sectionSpacingStart" />
          {makeCard1}
          <hr className="seperateSection" />
        </Fade>
        <div className="sectionSpacingStart" />
        <Fade>
          <section className="productTitle">
            <h2>
              EVERYDAY WIRELESS
              <br />
              ON‑EAR HEADPHONES
            </h2>
          </section>
          <div className="sectionSpacingStart" />
          {makeCard2}
          <hr className="seperateSection" />
        </Fade>
        <div className="sectionSpacingStart" />
        <Fade>
          <section className="productTitle">
            <h2>
              PREMIUM SOUND WIRELESS
              <br />
              OVER‑EAR HEADPHONES
            </h2>
          </section>
          <div className="sectionSpacingStart" />
          {makeCard3}
          <hr className="seperateSection" />
        </Fade>
        <div className="sectionSpacingStart" />
        <Fade>
          <section className="productTitle">
            <h2>
              ALWAYS‑READY
              <br />
              WIRELESS EARPHONES
            </h2>
          </section>
          <div className="sectionSpacingStart" />
          {makeCard4}
          <hr className="seperateSection" />
        </Fade>
        <div className="sectionSpacingStart" />
        <Fade>
          <section className="productTitle">
            <h2>WIRED OPTIONS</h2>
          </section>
          <div className="sectionSpacingStart" />
          {makeCard5}
          <hr className="seperateSection" />
        </Fade>
        <div className="sectionSpacingStart" />
        <Fade>
          <section className="productTitle">
            <h2>
              COMPACT YET POWERFUL
              <br />
              WIRELESS SPEAKER
            </h2>
          </section>

          <div className="sectionSpacingStart" />
          {makeCard6}
        </Fade>
      </div>
    );
  }
}

export default withRouter(ProductsArticles);
