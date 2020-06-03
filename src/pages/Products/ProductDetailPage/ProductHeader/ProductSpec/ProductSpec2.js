import React from "react";
import "./ProductSpec2.scss";

class ProductSpec2 extends React.Component {
  render() {
    const { text, url } = this.props;
    return (
      <section className="ProductSpec">
        <div className="textWrap">
          <div className="text" style={{ background: url }}>
            {text}
          </div>
        </div>
      </section>
    );
  }
}

export default ProductSpec2;
