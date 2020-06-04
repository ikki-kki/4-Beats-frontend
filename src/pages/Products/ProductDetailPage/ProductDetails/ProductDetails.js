import React from "react";
import "./ProductDetails.scss";
import DetailCard from "./DetailCard/DetailCard";
import MainHeader from "../../../../components/Headers/MainHeader/MainHeader";
// import Config from "../../../../config";

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
    fetch(`http://10.58.5.168:8000/api/product/${this.props.match.params.num}`)
      .then((res) => res.json())
      //   .then((res) => console.log(res));
      .then((res) => this.setState({ list: res.data }));
  }

  //   componentDidUpdate(prevProps) {
  //     if (prevProps.props.match.params.num !== this.props.match.params.num) {
  //       fetch(
  //         `http://10.58.5.168:8000/api/product/${this.props.match.params.num}`
  //       )
  //         .then((res) => res.json())
  //         .then((res) => this.setState({ list: res.data }));
  //     }
  //   }
  callBackClickCart = () => {
    this.setState({ clickCart: !this.state.clickCart });
  };

  render() {
    // console.log(this.state);
    // const {
    //   //   id,
    //   name,
    //   imgage_url,
    //   subject,
    //   price,
    //   description,
    // } = this.state.list;

    // console.log(this.state.list.name);
    const detailList =
      this.state.list &&
      this.state.list.map((post, idx) => (
        <DetailCard
          key={idx}
          name={post.name}
          price={post.price}
          image={post.imgage_url[0].imgage_url}
          subject={post.subject[0].subject}
          description={post.theme[0].description}
          specLists={post.item_info}
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
