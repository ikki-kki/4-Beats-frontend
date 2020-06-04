import React from "react";
import Config from "../Config";
import RedButton from "../../../components/Buttons/RedButton";
import "./ProductsDetailPage2.scss";

class ProductsDetailPage2 extends React.Component {
  render() {
    return (
      <div className="ProductsDetail_Pill">
        <section className="HeaderWrap">
          <div className="TextWrap">
            <div className="TextInner">
              <h1>
                Beats Pill
                <sup>
                  <b>+</b>
                </sup>
              </h1>
              <p>Portable Wireless Speaker</p>
              <div className="PriceBuyWrap">
                <div className="Price">$179.95</div>
                <div className="BuyBtnWrap">
                  <a
                    href="https://www.apple.com/shop/product/ML4M2LL/A/beats-pill-portable-speaker-black?cid=app_Beats_PillPlus_PDP_US_AOS_BeatsPillPlus"
                    className="BuyBtn"
                  >
                    <div>
                      <RedButton text={"Buy on"} link="/" />
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
                  <legend className="TextNote">
                    <h2>Available Colors</h2>
                    Find Your Color
                  </legend>
                  <div className="ColorList">
                    <ul>
                      <li className="Active" role="presentation">
                        <input
                          className="ColorListInput1"
                          name="color1"
                          type="radio"
                          value="white"
                          checked="checked"
                          id="ColorSelector1"
                        />
                        <label for="ColorSelector1">
                          <a href="#">
                            <div className="BtnBorder">
                              <div className="ImgWrap">
                                <img
                                  src="https://www.beatsbydre.com/content/dam/beats/content-blocks/pdp/color-selector/white.gif"
                                  alt="white"
                                />
                              </div>
                            </div>
                            <div className="ColorTitle">White</div>
                          </a>
                        </label>
                      </li>
                      <li className="Active" role="presentation">
                        <input
                          className="ColorListInput2"
                          name="color2"
                          type="radio"
                          value="black"
                          checked="checked"
                          id="ColorSelector2"
                        />
                        <label for="ColorSelector2">
                          <a href="#">
                            <div className="BtnBorder">
                              <div className="ImgWrap">
                                <img
                                  src="https://www.beatsbydre.com/content/dam/beats/content-blocks/pdp/color-selector/swatch-black.gif"
                                  alt="black"
                                />
                              </div>
                            </div>
                            <div className="ColorTitle">Black</div>
                          </a>
                        </label>
                      </li>
                      <li className="Active" role="presentation">
                        <input
                          className="ColorListInput3"
                          name="color3"
                          type="radio"
                          value="red"
                          checked="checked"
                          id="ColorSelector3"
                        />
                        <label for="ColorSelector3">
                          <a href="#">
                            <div className="BtnBorder">
                              <div className="ImgWrap">
                                <img
                                  src="https://www.beatsbydre.com/content/dam/beats/content-blocks/pdp/color-selector/(PRODUCT)RED.jpg"
                                  alt="red"
                                />
                              </div>
                            </div>
                            <div className="ColorTitle">(RED)™</div>
                          </a>
                        </label>
                      </li>
                    </ul>
                  </div>
                </fieldset>
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
      </div>
    );
  }
}
export default ProductsDetailPage2;
