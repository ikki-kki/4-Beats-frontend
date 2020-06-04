import React from "react";
import "./ProductDetails.scss";
import DetailCard from "./DetailCard/DetailCard";
import MainHeader from "../../../../components/Headers/MainHeader/MainHeader";
import { API } from "../../../../config";

class ProductDetails extends React.Component {
  constructor() {
    super();
    this.state = {
      current: 1,
      list: [],
      clickCart: false,
    };
  }

  componentDidMount() {
    fetch(`${API}/product/${this.props.match.params.num}`)
      .then((res) => res.json())
      //   .then((res) => console.log(res));
      .then((res) => this.setState({ list: res.data }));
  }
  callBackClickCart = () => {
    this.setState({ clickCart: !this.state.clickCart });
  };

  render() {
    const detailList =
      this.state.list &&
      this.state.list.map((post, idx) => (
        <DetailCard
          key={idx}
          id={post.id}
          name={post.name}
          price={post.price}
          image={post.imgage_url[0].imgage_url}
          subject={post.subject[0].subject}
          description={post.theme[0].description}
          specLists={post.item_info}
          color={post.colors}
        />
      ));
    return (
      <>
        <div
          className={`ProductDetailPage ${
            this.state.clickCart === true ? "cartClicked" : ""
          }`}
        ></div>
        <MainHeader clickCartHandler={this.callBackClickCart} />
        <section className="ProductDetails">{detailList}</section>
      </>
    );
  }
}

export default ProductDetails;
