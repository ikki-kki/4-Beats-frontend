import React, { Component } from "react";
import NewsFooter from "../../components/Footers/NewsFooter/NewsFooter";
import MainFooter from "../../components/Footers/MainFooter/MainFooter";
import "./Footer.scss";
export default class Footers extends Component {
  render() {
    return (
      <div className="footer">
        <NewsFooter />
        <MainFooter />
      </div>
    );
  }
}
