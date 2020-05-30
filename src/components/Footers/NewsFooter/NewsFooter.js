import React, { Component } from "react";
import RedBorderButton from "../../Buttons/RedBorderButton";

import "./NewsFooter.scss";

export default class NewsFooter extends Component {
  render() {
    return (
      <div className="NewsFooter">
        <h2>
          STAY CONNECTED
          <span>BEATS NEWSLETTER</span>
        </h2>
        <div className="inputContainer">
          <label className="inputLabel" for="inputText">
            Sign up now to hear about new stories, product drops,
            collaborations, and all things Beats — straight from your inbox.
          </label>
          <input
            className="textInput"
            id="inputText"
            type="text"
            placeholder="Enter your email"
          />
          <div className="checkboxContainer">
            <div>
              <input type="checkbox" id="check1" className="checkbox" />
              <label for="check1">
                <b>*&nbsp;</b>I am 16 years of age or older and agree with the
                Terms &
                <br />
                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Conditions and Privacy Policy
              </label>
            </div>
            <div>
              <input type="checkbox" id="check2" className="checkbox" />
              <label type="checkbox" for="check2">
                <b>*&nbsp;</b>I would like to receive marketing emails from
                Beats
              </label>
            </div>
          </div>
          <RedBorderButton text="sign up" />
        </div>
      </div>
    );
  }
}
