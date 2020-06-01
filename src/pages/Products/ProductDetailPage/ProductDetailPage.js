import React from "react";
import { withRouter } from "react-router-dom";
import ProductHeader from "./ProductHeader/ProductHeader";
import TextPiece from "./TextPiece/TextPiece";
import Config from "../Config";
import MainHeader from "../../../components/Headers/MainHeader/MainHeader";
import NewsFooter from "../../../components/Footers/NewsFooter/NewsFooter";
import MainFooter from "../../../components/Footers/MainFooter/MainFooter";
import Fade from "react-reveal/Fade";
import "./ProductDetailPage.scss";

const selProduct = {
  0: {
    productColor: "white",
    productColorName: "White",
    productColorNameC: "#000",
    src: `${Config.ProductImage}/powerbeats-white.png.large.2x.png.large.2x.png`,
    check: 1,
    color: "rgb(101, 101, 101)",
  },
  1: {
    productColor: "black",
    productColorName: "Black",
    productColorNameC: "#fff",
    src: `${Config.ProductImage}/powerbeats-black.png.large.2x.png.large.2x.png`,
    check: 1,
    color: "#fff",
  },
  2: {
    productColor: "#911827",
    productColorName: "Red",
    productColorNameC: "#fff",
    src: `${Config.ProductImage}/powerbeats-red.png.large.2x.png.large.2x.png`,
    check: 1,
    color: "#fff",
  },
};

class ProductDetailPage extends React.Component {
  state = {
    current: 0,
    view: false,
  };

  changeColor = (e) => {
    this.setState({ current: e });
  };

  leftBtn = () => {
    if (this.state.current !== 0) {
      this.setState({ current: this.state.current - 1 });
    } else {
      this.setState({ current: 2 });
    }
  };

  rightBtn = () => {
    if (this.state.current < 2) {
      this.setState({ current: this.state.current + 1 });
    } else {
      this.setState({ current: 0 });
    }
  };

  showBtn = () => {
    if (this.state.view === true) {
      this.setState({
        view: false,
      });
    } else if (this.state.view === false) {
      this.setState({
        view: true,
      });
    }
  };

  render() {
    return (
      <div className="ProductDetailPage">
        <MainHeader />
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
            <Fade left>
              <div className="leftContent">
                <img
                  alt="skate"
                  src={`${Config.detailImage}02.jpg.large.2x.jpg`}
                />
              </div>
            </Fade>
            <div className="rightContent">
              <Fade>
                <TextPiece
                  color="#fff"
                  title="Ready when you are"
                  inText="Seamlessly go from working out — to hanging out. Just leave them around your neck until you’re ready to listen again."
                />
              </Fade>
              <Fade right>
                <div className="contentImageRight">
                  <img
                    alt="man"
                    src={`${Config.detailImage}03.jpg.large.2x.jpg`}
                  />
                </div>
              </Fade>
            </div>
          </div>
          <div className="sectionSpacing" />
        </section>
        <section className="mainContentsBring">
          <div className="imgWrap">
            <Fade>
              <img
                alt="walking man"
                src={`${Config.detailImage}05.jpg.large.2x.jpg`}
              />
            </Fade>
            <div className="textWrap">
              <Fade bottom>
                <TextPiece
                  color="#fff"
                  title="Bring on the long days"
                  inText="With up to 15 hours of battery life, Powerbeats keep up with marathons, hikes, or multiple workout days in a single charge. And with Fast Fuel, a 5-minute charge gives up to 1 hour of playback when battery is low"
                />
                <div className="timeIcon">
                  <div className="iconStart" />
                  <div className="timeInfo">
                    <div className="infoTop">Up To</div>
                    <div className="infoMiddle">15</div>
                    <div className="infoBottom">Hours</div>
                  </div>
                  <div className="iconEnd" />
                </div>
              </Fade>
            </div>
          </div>
        </section>
        <section className="mainContentsPerformance">
          <Fade>
            <div className="imgWrap">
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
          </Fade>
        </section>
        <section className="mainContentsComfort">
          <div className="sectionSpacing"></div>
          <div className="imageAndText">
            <div className="leftContent">
              <Fade>
                <TextPiece
                  color="#161616"
                  title="Comfort by design"
                  inText="With a streamlined, round cable engineered to minimize friction, and secure-fit earhooks for added stability, these earphones feel light and comfortable even after hours of wear."
                />
              </Fade>
              <Fade left>
                <div className="contentImageLeft">
                  <img
                    alt="woman"
                    src={`${Config.detailImage}07.jpg.large.2x.jpg`}
                  />
                </div>
              </Fade>
            </div>
            <Fade right>
              <div className="rightContent">
                <img
                  alt="womanfull"
                  src={`${Config.detailImage}06.jpg.large.2x.jpg`}
                />
              </div>
            </Fade>
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
            <h2
              className="selectColorHeader"
              style={{ color: selProduct[this.state.current].color }}
            >
              <span>Select your color</span>
            </h2>
            <div className="selectColorCircle">
              <div
                onClick={() => this.changeColor(0)}
                className="colorCirclesWhite white"
              >
                <span
                  className={`checkedWhite white ${
                    this.state.current === 0 ? "checked" : ""
                  }`}
                />
              </div>
              <div
                onClick={() => this.changeColor(1)}
                className="colorCirclesBlack black"
              >
                <span
                  className={`checkedBlack black ${
                    this.state.current === 1 ? "checked" : ""
                  }`}
                />
              </div>
              <div
                onClick={() => this.changeColor(2)}
                className="colorCirclesRed red"
              >
                <span
                  className={`checkedRed red ${
                    this.state.current === 2 ? "checked" : ""
                  }`}
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
            <Fade>
              <img
                alt="walking man"
                src={`${Config.detailImage}08.jpg.large.2x.jpg`}
              />
            </Fade>
            <div className="textWrap">
              <Fade bottom>
                <TextPiece
                  color="#fff"
                  title="Listen with a friend"
                  inText="With Audio Sharing, you can pair two sets of Beats headphones or AirPods to one iPhone and enjoy the same song, podcast, or movie along with a friend."
                />
              </Fade>
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
              <Fade bottom>
                <div className="detailWrap">
                  <div className="imgWrap">
                    <img
                      alt="detail"
                      src={`${Config.ProductDetail}-p11c.jpg.large.2x.jpg`}
                    />
                  </div>
                  <div className="textWrap">
                    <h4>Enhanced call performance</h4>
                    <p>
                      With multiple on-ear microphones that target your voice
                      and filter out external noise, and Class 1 Bluetooth for
                      extended range and fewer dropouts.
                    </p>
                  </div>
                </div>
              </Fade>
              <Fade bottom>
                <div className="detailWrap">
                  <div className="imgWrap">
                    <img
                      alt="detail"
                      src={`${Config.ProductDetail}-p09a.jpg.large.2x.jpg`}
                    />
                  </div>
                  <div className="textWrap">
                    <h4>On-ear controls</h4>
                    <p>
                      Take calls, skip songs, and adjust volume directly from
                      the earbud, so you don’t need your device to control your
                      audio.
                    </p>
                  </div>
                </div>
              </Fade>
              <Fade bottom>
                <div className="detailWrap">
                  <div className="imgWrap">
                    <img
                      alt="detail"
                      src={`${Config.ProductDetail}-p10b.jpg.large.2x.jpg`}
                    />
                  </div>
                  <div className="textWrap">
                    <h4>Voice controls</h4>
                    <p>
                      Stay in the zone with hands-free controls via “Hey Siri”
                      on iOS devices, and voice capability with the push of the
                      b button on a variety of compatible devices.
                    </p>
                  </div>
                </div>
              </Fade>
            </div>
          </div>
          <div className="sectionSpacing2" />
        </section>
        <section className="whatInTheBox">
          <div className="contentWrap">
            <Fade>
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
            </Fade>
            <div className="imgWrap">
              <Fade>
                <img
                  alt="box"
                  src={`${Config.ProductDetail}-p12.png.large.2x.png`}
                />
              </Fade>
            </div>
          </div>
        </section>
        <section className="powerDropDownMenu">
          <div className="dropBtn">
            <h2>
              <button onClick={this.showBtn}>
                Powerbeats details
                <i
                  className={`fas fa-angle-down ${
                    this.state.view ? "iconActive" : ""
                  }`}
                ></i>
              </button>
            </h2>
          </div>
          <div
            className={`menuWrap ${this.state.view ? "menuWrapActive" : ""}`}
            style={{ display: this.state.view }}
          >
            <div className="listLeftRight">
              <div className="totalListLeft">
                <div className="titleListWrap">
                  <div className="listContainer">
                    <h3>Highlights</h3>
                    <div className="listWrap">
                      <ul>
                        <li>
                          Wireless high-performance earphones with streamlined,
                          round cable and adjustable, secure-fit earhooks for
                          lightweight comfort and stability.
                        </li>
                        <li>
                          Reinforced, sleek design for sweat & water resistance
                          during tough workouts
                        </li>
                        <li>
                          Integrated on-ear controls for music, phone calls, and
                          voice capability
                        </li>
                        <li>
                          Powerful, balanced sound with dynamic range and noise
                          isolation
                        </li>
                        <li>Up to 15 hours of listening time</li>
                      </ul>
                    </div>
                  </div>
                  <div className="listContainer">
                    <h3>Battery</h3>
                    <div className="listWrap">
                      <ul>
                        <li>
                          Powerbeats (single charge): Up to 15 hours of
                          listening time
                        </li>
                        <li>
                          Fast Fuel: A 5-minute charge provides up to 1 hour of
                          playback
                        </li>
                      </ul>
                    </div>
                  </div>
                  <div className="listContainer">
                    <h3>On-ear controls</h3>
                    <div className="listWrap">
                      <ul>
                        <li>Power button on the left earbud</li>
                        <li>
                          Volume, track, and call controls on the right earbud
                        </li>
                        <li>
                          Hands-free controls with “Hey Siri” and voice
                          assistant on compatible devices
                        </li>
                      </ul>
                    </div>
                  </div>
                  <div className="listContainer">
                    <h3>Other features</h3>
                    <div className="listWrap">
                      <ul>
                        <li>Dual beam-forming microphones</li>
                        <li>Motion-detecting accelerometer</li>
                        <li>Speech-detecting accelerometer</li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
              <div className="totalListRight">
                <div className="titleListWrap">
                  <div className="listContainer">
                    <h3>General</h3>
                    <div className="listWrap">
                      <ul>
                        <li>Height: 2.2 in / 5.6 cm</li>
                        <li>Weight: 0.93 oz / 26.3 g</li>
                        <li>Form factor: In ear </li>
                        <li>Power: Rechargeable lithium-ion </li>
                      </ul>
                    </div>
                  </div>
                  <div className="listContainer">
                    <h3>Connectivity</h3>
                    <div className="listWrap">
                      <ul>
                        <li>Apple H1 chip</li>
                        <li>Class 1 Wireless Bluetooth</li>
                      </ul>
                    </div>
                  </div>
                  <div className="listContainer">
                    <h3>Packaging</h3>
                    <div className="listWrap">
                      <ul>
                        <li>Powerbeats product box uses 70% recycled fiber*</li>
                        <li>* Excluding the sleeve</li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="sectionSpacing3" />
          <div className="explainWrap">
            <div className="explain">
              <p>
                {" "}
                Testing conducted by Apple in November 2019 using preproduction
                Powerbeats and software paired with iPhone XS units and
                prerelease software. The playlist consisted of continuous pink
                noise at 80dB. 5-Minute charge testing conducted with drained
                Powerbeats that were charged for 5 minutes, then audio playback
                was started until Powerbeats stopped playback. Battery life
                depends on device settings, environment, usage, and many other
                factors.
              </p>
              <p>
                {" "}
                Compatible with all Apple W1 and H1 chip-enabled Beats
                headphones and AirPods. Works with iPhone 8 or later and iPod
                touch (7th generation) with the latest version of iOS; and
                12.9-inch iPad Pro (2nd generation or later), 11-inch iPad Pro,
                10.5-inch iPad Pro, iPad (5th generation or later), iPad Air
                (3rd generation), and iPad mini (5th generation) with the latest
                version of iPadOS.
              </p>
              <p>
                {" "}
                Siri may not be available in all languages or in all areas, and
                features may vary by area. Internet access is required. Cellular
                data charges may apply.
              </p>
            </div>
          </div>
          <div className="sectionSpacing3" />
        </section>
        <section className="news">
          <div className="sectionSpacing4" />
          <NewsFooter />
          <div className="sectionSpacing3" />
        </section>
        <MainFooter />
      </div>
    );
  }
}

export default withRouter(ProductDetailPage);
