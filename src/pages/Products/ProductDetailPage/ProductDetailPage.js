import React from "react";
import { withRouter } from "react-router-dom";
import ProductHeader from "./ProductHeader/ProductHeader";
import TextPiece from "./TextPiece/TextPiece";
import Config from "../Config";
import "./ProductDetailPage.scss";

const selProduct = [
  {
    productColor: "white",
    productColorName: "White",
    productColorNameC: "#000",
    src: `${Config.ProductImage}/powerbeats-white.png.large.2x.png.large.2x.png`,
    check: 1,
  },
  {
    productColor: "black",
    productColorName: "Black",
    productColorNameC: "#fff",
    src: `${Config.ProductImage}/powerbeats-black.png.large.2x.png.large.2x.png`,
    check: 1,
  },
  {
    productColor: "#911827",
    productColorName: "Red",
    productColorNameC: "#fff",
    src: `${Config.ProductImage}/powerbeats-red.png.large.2x.png.large.2x.png`,
    check: 1,
  },
];

class ProductDetailPage extends React.Component {
  state = {
    current: 0,
  };

  changeWhite = () => {
    this.setState({ current: 0 });
  };
  changeBlack = () => {
    this.setState({ current: 1 });
  };
  changeRed = () => {
    this.setState({ current: 2 });
  };

  leftBtn = () => {
    if (this.state.current === 0) {
      this.changeBlack();
    } else if (this.state.current === 1) {
      this.changeWhite();
    } else if (this.state.current === 2) {
      this.changeBlack();
    }
    // console.log('left')
  };

  rightBtn = () => {
    if (this.state.current === 1) {
      this.changeRed();
    } else if (this.state.current === 0) {
      this.changeBlack();
    } else if (this.state.current === 2) {
      this.changeWhite();
    }
    // console.log('right')
  };

  render() {
    return (
      <div className="ProductDetailPage">
        <section className="headerWrapper">
          <ProductHeader />
          <div className="headerImage">
            <div className="gradientOverlay"></div>
            <img
              alt="powerbeats"
              src={`${Config.detailImage}01.jpg.large.2x.jpg`}
            />
          </div>
        </section>
        <section className="mainContentsReady">
          <div className="sectionSpacing"></div>
          <div className="imageAndText">
            <div className="leftContent">
              <img
                alt="skate"
                src={`${Config.detailImage}02.jpg.large.2x.jpg`}
              />
            </div>
            <div className="rightContent">
              <TextPiece
                color="#fff"
                title="Ready when you are"
                inText="Seamlessly go from working out — to hanging out. Just leave them around your neck until you’re ready to listen again."
              />
              <div className="contentImageRight">
                <img
                  alt="man"
                  src={`${Config.detailImage}03.jpg.large.2x.jpg`}
                />
              </div>
            </div>
          </div>
          <div className="sectionSpacing"></div>
        </section>
        <section className="mainContentsBring">
          <div className="imgWrap">
            <img
              alt="walking man"
              src={`${Config.detailImage}05.jpg.large.2x.jpg`}
            />
            <div className="textWrap">
              <TextPiece
                color="#fff"
                title="Bring on the long days"
                inText="With up to 15 hours of battery life, Powerbeats keep up with marathons, hikes, or multiple workout days in a single charge. And with Fast Fuel, a 5-minute charge gives up to 1 hour of playback when battery is low"
              />
              <div className="timeIcon">
                <div className="timeInfo">
                  <div className="infoTop">Up To</div>
                  <div className="infoMiddle">15</div>
                  <div className="infoBottom">Hours</div>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section className="mainContentsPerformance">
          <div className="imgwrap">
            <img
              alt="power beats"
              src={`${Config.detailImage}04.png.large.2x.png`}
            />
          </div>
          <div className="textWrap">
            <TextPiece
              width="60%"
              color="#161616"
              title="Performance runs in the family"
              inText="Powerbeats matches the sleek design and advanced engineering of Powerbeats Pro, with the same powerful sound and reinforced sweat and water resistance."
            />
          </div>
          <p className="viewAll">Looking for totally wireless?</p>
          <p className="viewAllLink">EXPLORE POWERBEATS PRO</p>
        </section>
        <section className="mainContentsComfort">
          <div className="sectionSpacing"></div>
          <div className="imageAndText">
            <div className="leftContent">
              <TextPiece
                color="#161616"
                title="Comfort by design"
                inText="With a streamlined, round cable engineered to minimize friction, and secure-fit earhooks for added stability, these earphones feel light and comfortable even after hours of wear."
              />
              <div className="contentImageLeft">
                <img
                  alt="woman"
                  src={`${Config.detailImage}07.jpg.large.2x.jpg`}
                />
              </div>
            </div>
            <div className="rightContent">
              <img
                alt="womanfull"
                src={`${Config.detailImage}06.jpg.large.2x.jpg`}
              />
            </div>
          </div>
          <div className="sectionSpacing"></div>
        </section>
        <section
          className="mainContentsSelect"
          id="buy"
          style={{
            backgroundColor: selProduct[this.state.current].productColor,
          }}
        >
          <div className="gradient" />
          <div className="selectColorWrapper">
            <h2 className="selectColorHeader">
              <span>Select your color</span>
            </h2>
            <div className="selectColorCircle">
              <div onClick={this.changeWhite} className="colorCirclesWhite">
                <span
                  className="checkedWhite"
                  style={{ opacity: this.state.check }}
                />
              </div>
              <div onClick={this.changeBlack} className="colorCirclesBlack">
                <span
                  className="checkedBlack"
                  style={{ opacity: this.state.check }}
                />
              </div>
              <div onClick={this.changeRed} className="colorCirclesRed">
                <span
                  className="checkedRed"
                  style={{ opacity: this.state.check }}
                />
              </div>
            </div>
            <div className="selectColorName">
              <div
                className="selectProductName"
                style={{
                  color: selProduct[this.state.current].productColorNameC,
                }}
              >
                {selProduct[this.state.current].productColorName}
              </div>
            </div>
            <div className="selectColorImgWrap">
              <button onClick={this.leftBtn} className="leftBtn">
                <div className="leftBtnWrap" />
              </button>
              <div className="imageWrap">
                <div className="productImg1">
                  <img
                    alt="productWhite"
                    src={selProduct[this.state.current].src}
                  />
                </div>
              </div>
              <button onClick={this.rightBtn} className="rightBtn">
                <div className="rightBtnWrap" />
              </button>
            </div>
          </div>
        </section>
        <div className="sectionSpacing" />
        <section className="mainContentsListen">
          <div className="imgWrap">
            <img
              alt="walking man"
              src={`${Config.detailImage}08.jpg.large.2x.jpg`}
            />
            <div className="textWrap">
              <TextPiece
                color="#fff"
                title="Listen with a friend"
                inText="With Audio Sharing, you can pair two sets of Beats headphones or AirPods to one iPhone and enjoy the same song, podcast, or movie along with a friend."
              />
            </div>
          </div>
        </section>
        <section className="detailBox">
          <div className="sectionSpacing" />
          <div className="detailTitle">
            <h2>Take control over your audio</h2>
          </div>
          <div className="containerWrap">
            <div className="widthContainer">
              <div className="detailWrap">
                <img
                  alt="detail"
                  src={`${Config.ProductDetail}-p11c.jpg.large.2x.jpg`}
                />
                <div className="textWrap">
                  <h4>Enhanced call performance</h4>
                  <p>
                    With multiple on-ear microphones that target your voice and
                    filter out external noise, and Class 1 Bluetooth for
                    extended range and fewer dropouts.
                  </p>
                </div>
              </div>
              <div className="detailWrap">
                <img
                  alt="detail"
                  src={`${Config.ProductDetail}-p09a.jpg.large.2x.jpg`}
                />
                <div className="textWrap">
                  <h4>On-ear controls</h4>
                  <p>
                    Take calls, skip songs, and adjust volume directly from the
                    earbud, so you don’t need your device to control your audio.
                  </p>
                </div>
              </div>
              <div className="detailWrap">
                <img
                  alt="detail"
                  src={`${Config.ProductDetail}-p10b.jpg.large.2x.jpg`}
                />
                <div className="textWrap">
                  <h4>Voice controls</h4>
                  <p>
                    Stay in the zone with hands-free controls via “Hey Siri” on
                    iOS devices, and voice capability with the push of the b
                    button on a variety of compatible devices.
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className="sectionSpacing2" />
        </section>
        <section className="whatInTheBox">
          <div className="contentWrap">
            <div className="textWrap">
              <h2>What’s in the box</h2>
              <ul>
                <li>Powerbeats wireless earphones</li>
                <li>Carrying case</li>
                <li>Eartips with four size options</li>
                <li>Lightning to USB-A charging cable</li>
                <li>Quick Start Guide</li>
                <li>Warranty Card</li>
              </ul>
            </div>
            <div className="imgWrap">
              <img
                alt="box"
                src={`${Config.ProductDetail}-p12.png.large.2x.png`}
              />
            </div>
          </div>
        </section>
        <section>
          <div className="rightContent">
            <TextPiece
              title="Ready when you are"
              inText="Seamlessly go from working out — to hanging out. Just leave them around your neck until you’re ready to listen again."
            />
            <div className="contentImageRight">
              <img
                alt="man"
                src={`${Config[0].detailImage}03.jpg.large.2x.jpg`}
              />
            </div>
          </div>

          <div className="sectionSpacing"></div>
        </section>
        <section className="mainContensHalfBlackWrap">
          <div>
            <img
              alt="walking man"
              src={`${Config[0].detailImage}05.jpg.large.2x.jpg`}
            />
          </div>
          <TextPiece
            title="Bring on the long days"
            inText="With up to 15 hours of battery life, Powerbeats keep up with marathons, hikes, or multiple workout days in a single charge. And with Fast Fuel, a 5-minute charge gives up to 1 hour of playback when battery is low"
          />
          <div className="timeIcon">
            <div></div>
          </div>
        </section>
      </div>
    );
  }
}

export default withRouter(ProductDetailPage);
