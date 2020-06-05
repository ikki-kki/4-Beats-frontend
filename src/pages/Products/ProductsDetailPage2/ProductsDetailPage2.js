import React from "react";
import Config from "../Config";
import RedButton from "../../../components/Buttons/RedButton";
import Footers from "../../../components/Footers/Footers";
import "./ProductsDetailPage2.scss";

const SpeakerImg = {
  0: {
    src:
      "https://www.beatsbydre.com/content/dam/beats/web/pdp/beats-pill-plus/color_selection/white_thqrt_retina_1800x1800_V2.png",
  },
  1: {
    src:
      "https://www.beatsbydre.com/content/dam/beats/web/pdp/beats-pill-plus/color_selection/black_thqrt_retina_1800x1800_V2.png",
  },
  2: {
    src:
      "https://www.beatsbydre.com/content/dam/beats/web/pdp/beats-pill-plus/color_selection/_0001_rgb_ML4Q2-RGB-thrqtrlft_V2.png",
  },
};

class ProductsDetailPage2 extends React.Component {
  state = {
    isActive: 0,
    view: 0,
  };

  handleOptionSelect = (num) => {
    const { isActive } = this.state;

    if (isActive === 0) {
      this.setState({
        isActive: num,
      });
    } else if (isActive !== 0) {
      this.setState({
        isActive: num,
      });
    }
  };

  ImgSelect = (number) => {
    this.setState({ view: number });
  };

  render() {
    return (
      <div className="ProductsDetail_Pill">
        <section className="HeaderWrap">
          <div className="TextWrap">
            <div className="TextInner">
              <h1>
                Beats Pill
                <sup>+</sup>
              </h1>
              <p>Portable Wireless Speaker</p>
              <div className="PriceBuyWrap">
                <div className="Price">$179.95</div>
                <div className="BuyBtnWrap">
                  <a
                    href="https://www.apple.com/shop/product/ML4M2LL/A/beats-pill-portable-speaker-black?cid=app_Beats_PillPlus_PDP_US_AOS_BeatsPillPlus"
                    className="BuyBtn"
                  >
                    <div className="RedBtn">
                      <RedButton text={"BUY ON"} />
                    </div>
                  </a>
                </div>
              </div>
            </div>
          </div>

          <div className="HeaderImg">
            <img src={Config.ProductsPillImg} alt="Main-Pill-img" />
          </div>
        </section>
        <section className="ProductColorPalette">
          <div className="ProductColorSelectorWrap">
            <figure className="BackgroundImg" />
            <div className="ColorSelector">
              <div className="Container">
                <fieldset className="ColorSelectorContent">
                  <div className="TextNote">
                    <h2>Available Colors</h2>
                  </div>
                  <div className="ColorList">
                    <div className="WhiteWrap">
                      <div className="White">
                        <div
                          className="WhiteBox"
                          onClick={() => this.ImgSelect(0)}
                        />
                      </div>
                      <div className="TextWhite">White</div>
                    </div>
                    <div className="BlackWrap">
                      <div className="Black">
                        <div
                          className="BlackBox"
                          onClick={() => this.ImgSelect(1)}
                        />
                      </div>
                      <div className="TextBlack">Black</div>
                    </div>
                    <div className="RedWrap">
                      <div className="Red">
                        <div
                          className="RedBox"
                          onClick={() => this.ImgSelect(2)}
                        />
                      </div>
                      <div className="TextRed">Red</div>
                    </div>
                  </div>
                </fieldset>
                <div className="SpeakerWhite">
                  <img src={SpeakerImg[this.state.view].src} alt="Color" />
                </div>
              </div>
            </div>
          </div>
        </section>
        <section className="ChessImgText">
          <div className="Container">
            <div className="ItemFirst">
              <div className="ItemImg">
                <img
                  src="https://www.beatsbydre.com/content/dam/beats/web/pdp/beats-pill-plus/3up/_0005s_0001_rgb_Pill%2b_black_top_RGB_V2.jpg.medium.2x.jpg"
                  alt="Img"
                />
              </div>
              <div className="Text">
                <div className="TextInner">
                  <h3>All Day. Every Day.</h3>
                  <p>
                    The Beats Pill<sup>+</sup> speaker has up to 12 hours of
                    battery life to stay charged on the go. Get a quick charge
                    in 3 hours with the Lightning cable and even charge your
                    phone or external music device with extra power from your
                    Beats Pill
                    <sup>+</sup>. The LED fuel gauge lets you know how much
                    battery is left.
                    <br />
                  </p>
                </div>
              </div>
            </div>
            <div className="ItemSecond">
              <div className="ItemImg">
                <img
                  src="https://www.beatsbydre.com/content/dam/beats/web/pdp/beats-pill-plus/3up/_0005s_0000_rgb_Pill%2b_black_bottom_RGB_V2.jpg.medium.2x.jpg"
                  alt="Img"
                />
              </div>
              <div className="Text">
                <div className="TextInner">
                  <h3>Designed Around You</h3>
                  <p>
                    The no-nonsense interface gets you to your music fast. Play,
                    pause, skip tracks, and control your phone calls with a
                    touch of the multifunction “b” button. The enhanced
                    speakerphone lets you make and receive calls with clarity.
                    <br />
                  </p>
                </div>
              </div>
            </div>
            <div className="ItemThird">
              <div className="ItemImg">
                <img
                  src="https://www.beatsbydre.com/content/dam/beats/web/pdp/beats-pill-plus/3up/pill%2b_3up_large_retina_1880x1880_V2.jpg.medium.2x.jpg"
                  alt="Img"
                />
              </div>
              <div className="Text">
                <div className="TextInner">
                  <h3>Sound Bigger Than Its Size</h3>
                  <p>
                    The stereo active 2-way crossover system creates an
                    optimized sound field for dynamic range and clarity across
                    all genres of music. Tweeter and woofer separation uses the
                    same acoustic mechanics found in professional recording
                    studios around the world.
                    <br />
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section className="BeatsPillApp">
          <div className="Container">
            <div className="MainText">
              <h2>
                Beats Pill<sup>+</sup> App
              </h2>
              <p>
                Download the Beats Pill<sup>+</sup> app* to unlock features that
                put you and your friends at the center of your music like never
                before. Bring a second speaker into the mix for even fuller
                sound or sound in stereo. *Available only on the iPhone 5s or
                later, iPad Pro, iPad Air (all models), iPad mini 2 or later,
                and select Android devices.
              </p>
            </div>
            <div className="App">
              <div className="AppleStore">
                <a href="https://apps.apple.com/sg/app/beats-pill/id1005829608">
                  <img
                    src="https://www.beatsbydre.com/content/dam/beats/global/icon-app-store.png"
                    alt="App"
                  />
                </a>
              </div>
              <div className="GooglePlay">
                <a href="https://play.google.com/store/apps/details?id=com.apple.bnd&hl=sg">
                  <img
                    src="https://www.beatsbydre.com/content/dam/beats/global/icon-google-play.png"
                    alt="App"
                  />
                </a>
              </div>
            </div>
          </div>
        </section>
        <section className="StickySection">
          <div className="SlideWrap">
            <div className="Text">
              <div className="TextInner">
                <h3>DJ the Playlist</h3>
                <p>
                  Grab a friend and control the music from two Bluetooth
                  <sup>®</sup> sources.{" "}
                </p>
              </div>
            </div>
            <div className="StickyImg"></div>
          </div>
          <div className="SlideWrap_2">
            <div className="Text">
              <div className="TextInner">
                <h3>Amplify Your Sound</h3>
                <p>
                  Add a second Beats Pill<sup>+</sup> into the mix and
                  simultaneously play from both speakers for a sound that’s
                  twice as full.
                </p>
              </div>
            </div>
            <div className="StickyImg"></div>
          </div>
          <div className="SlideWrap_3">
            <div className="Text">
              <div className="TextInner">
                <h3>Put It in Stereo</h3>
                <p>
                  Sync two Beats Pill<sup>+</sup> speakers together for
                  dedicated left and right playback and an even more dynamic
                  sound experience.
                </p>
              </div>
            </div>
            <div className="StickyImg"></div>
          </div>
        </section>
        <section className="ProductOverview">
          <div className="Container">
            <div className="Content">
              <div className="ItemLeft">
                <div className="Title">
                  <h2>Product Overview</h2>
                  <p>
                    Pill’s lightweight and portable design lets you bring the
                    music wherever you go. Despite its compact size, the Pill
                    produces powerful sound with soaring highs and deep bass to
                    fill up any room.
                  </p>
                </div>
                <div className="Toggle">
                  <div className="HighlightsBtn">
                    <div
                      className="HighDropBtn"
                      onClick={() => this.handleOptionSelect(1)}
                    >
                      <button>
                        <h4>Highlights</h4>
                      </button>
                      <i
                        className={`fas fa-plus ${
                          this.state.isActive === 1 ? "iconActive" : ""
                        }`}
                      ></i>
                    </div>
                    <div
                      className={`ContentShow ${
                        this.state.isActive === 1 ? "" : "ContentNone"
                      }`}
                    >
                      <p>
                        • Defined, pure sound quality in a portable, compact
                        design <br />• Pair and play with your Bluetooth® device{" "}
                        <br />• 12-hour rechargeable battery <br />• Built-in
                        speakerphone <br />• Charge out to charge your iPhone
                        and other devices <br />• Power adapter and Lightning
                        cable included
                      </p>
                    </div>
                  </div>
                  <div className="TechSpecsBtn">
                    <div
                      className="TechDropBtn"
                      onClick={() => this.handleOptionSelect(2)}
                    >
                      <button>
                        <h4>Tech Specs</h4>
                      </button>
                      <i
                        className={`fas fa-plus ${
                          this.state.isActive === 2 ? "iconActive" : ""
                        }`}
                      ></i>
                    </div>
                    <div
                      className={`ContentShow ${
                        this.state.isActive === 2 ? "" : "ContentNone"
                      }`}
                    >
                      <p>
                        • Height: 2.5 in/6.36 cm
                        <br />• Length: 8.27 in/21 cm
                        <br />• Width: 2.72 in/6.92 cm
                        <br />• Stereo Bluetooth®
                        <br />• 3.5mm stereo jack
                      </p>
                    </div>
                  </div>
                </div>
                <div className="PriceWrap">
                  <div className="Price">$179.95</div>
                  <div>
                    <RedButton text={"BUY ON"} />
                  </div>
                </div>
              </div>
              <div className="ItemRight">
                <div className="Image">
                  <img
                    src="https://www.beatsbydre.com/content/dam/beats/web/pdp/beats-pill-plus/product_overview/overview_pillplus_retina_V2.png"
                    alt="img"
                  />
                </div>
              </div>
            </div>
          </div>
        </section>
        <Footers />
      </div>
    );
  }
}
export default ProductsDetailPage2;
