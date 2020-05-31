import React from "react";
import { withRouter } from "react-router-dom";
import Cart from "../../components/Cart/Cart";
import MainHeader from "../../components/Headers/MainHeader/MainHeader";
//import BuyHeader from "../../components/Headers/BuyHeader/BuyHeader";
import Footer from "../../components/Footers/Footers";
import Story from "../Stories/StoryContainer/StoryContainer";
//import CartHeader from "../../components/Headers/CartHeader/CartHeader";
export class Main extends React.Component {
  render() {
    return (
      <>
        <Cart />
        <div>
          <MainHeader />
          <Story />
          <Footer />
        </div>
      </>
    );
  }
}

export default withRouter(Main);
