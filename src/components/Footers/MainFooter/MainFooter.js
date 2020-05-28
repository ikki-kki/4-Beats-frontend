import React, { Component } from "react";
import "./MainFooter.scss";
import { Link } from "react-router-dom";

const productsData = [
  "VIEW ALL",
  "POWERBEATS",
  "POWERBEATS PRO",
  "SOLO PRO",
  "BEATS SOLO3 WIRELESS",
  "BEATS STUDIO3 WIRELESS",
  "BEATSX",
  "BEATS EP",
  "URBEATS3",
  "URBEATS3 WITH LIGHTNING CONNECTOR",
  "BEATS PILL +",
  "SPECIAL OFFERS",
];
const supportData = [
  "PRODUCT HELP",
  "SERVICE & WARRANTY",
  "REGISTER YOUR BEATS",
  "UPDATE YOUR BEATS",
  "AUTHORIZED RETAILERS",
  "CONTACT SUPPORT",
  "INTERNATIONAL NUMBERS",
];

export default class MainFooter extends Component {
  render() {
    return (
      <footer className="MainFooter">
        <div className="footer-container">
          <div className="logo">
            <Link to="/" className="footerLink">
              <img
                className="logo"
                alt=""
                src="https://www.beatsbydre.com/content/dam/beats/global/logos/beats-logo-161616.png"
              />
            </Link>
          </div>
          <div className="links">
            <div className="links-container">
              <h2>Products</h2>
              <ul>
                {productsData.map((data, i) => {
                  return (
                    <li key={i}>
                      <Link className="link-to" to="/products/detail">
                        {data}
                      </Link>
                    </li>
                  );
                })}
              </ul>
            </div>
            <div className="links-container">
              <h2>Support</h2>
              <ul>
                {supportData.map((data, i) => {
                  return (
                    <li key={i}>
                      <Link className="link-to" to="/support">
                        {data}
                      </Link>
                    </li>
                  );
                })}
              </ul>
            </div>
            <div className="links-container">
              <h2>Company</h2>
              <ul>
                <li>
                  <Link className="link-to" to="/">
                    ABOUT
                  </Link>
                </li>
                <li>
                  <Link className="link-to" to="/">
                    PRESS
                  </Link>
                </li>
                <li>
                  <Link className="link-to" to="/">
                    CAREERS
                  </Link>
                </li>
              </ul>
              <br />
              <h2 className="bottomBlock">Legal</h2>
              <ul>
                <li>
                  <Link className="link-to" to="/">
                    TERMS OF USE
                  </Link>
                </li>
                <li>
                  <Link className="link-to" to="/">
                    PRIVACY
                  </Link>
                </li>
                <li>
                  <Link className="link-to" to="/">
                    TRADEMARKS
                  </Link>
                </li>
                <li>
                  <Link className="link-to" to="/">
                    PROMOTION TERMS
                  </Link>
                </li>
              </ul>
            </div>
            <div className="links-container">
              <h2>Company</h2>
              <ul>
                <li>
                  <Link
                    className="socielIcon"
                    to="https://www.twitter.com/beatsbydre"
                  >
                    <i className="fab fa-twitter"></i>
                  </Link>
                  <Link
                    className="socielIcon"
                    to="https://www.facebook.com/beatsbydre"
                  >
                    <i className="fab fa-facebook-f"></i>
                  </Link>
                  <Link
                    className="socielIcon"
                    to="https://www.youtube.com/beatsbydre"
                  >
                    <i className="fab fa-youtube"></i>
                  </Link>
                  <Link
                    className="socielIcon"
                    to="https://www.instagram.com/beatsbydre"
                  >
                    <i className="fab fa-instagram"></i>
                  </Link>
                </li>
              </ul>
              <br />
              <h2 className="bottomBlock">Legal</h2>
              <ul>
                <li>
                  <Link className="link-to" to="/">
                    UNITED STATES | CHANGE
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div className="copyright">
          <span>Copyright © 2020 Apple Inc. - All rights reserved.</span>
          <a className="goUp" href="#">
            <i className="fas fa-chevron-up"></i>
          </a>
        </div>
      </footer>
    );
  }
}
