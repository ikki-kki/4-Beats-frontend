import React from "react";
import { withRouter } from "react-router-dom";
import Search from "../../components/Search/Search";
import Footer from "../../components/Footers/Footers";
import Story from "../Stories/Stories";
//import BuyHeader from "../../components/Headers/BuyHeader/BuyHeader";
//import CartHeader from "../../components/Headers/CartHeader/CartHeader";
export class Main extends React.Component {
  render() {
    return (
      <div>
        <Search />
        <Story />
        <Footer />
      </div>
    );
  }
}

export default withRouter(Main);
