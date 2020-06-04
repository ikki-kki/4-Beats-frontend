import React from "react";
import { Link } from "react-router-dom";
import "./UserName.scss";

class UserName extends React.Component {
  constructor() {
    super();
    this.state = {
      orderState: false,
    };
  }

  isOrderOpen = () => {
    this.setState({ orderState: true });
  };
  render() {
    const userName = localStorage.getItem("full_name");
    return (
      <Link to="/order" className="orderOpen">
        <span>{userName}</span>
      </Link>
    );
  }
}
export default UserName;
