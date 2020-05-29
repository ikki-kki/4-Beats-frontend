import React, { Component } from "react";
import NewsFooter from "../../components/Footers/NewsFooter/NewsFooter";
import MainFooter from "../../components/Footers/MainFooter/MainFooter";

export default class Footers extends Component {
  render() {
    return (
      <div>
        <NewsFooter />
        <MainFooter />
      </div>
    );
  }
}
