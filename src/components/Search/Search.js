import React, { Component } from "react";
import "./Search.scss";
export class Search extends Component {
  constructor() {
    super();
    this.state = {
      clicked: "inline-block",
    };
  }

  clickSearch = () => {
    this.setState({ clicked: "none" });
  };

  render() {
    return (
      <div className="Search" onClick={this.clickSearch}>
        <form className="searchContainer">
          <input type="text" className="searchBox" />
          <span
            className="material-icons searchIcon"
            style={{ display: this.state.clicked }}
          >
            search
          </span>
        </form>
      </div>
    );
  }
}

export default Search;
