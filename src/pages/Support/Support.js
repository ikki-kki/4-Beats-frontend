import React from "react";
import Config from "./Config";
import MainHeader from "../../components/Headers/MainHeader/MainHeader";
import "./Support.scss";
import GrayBorderButton from "../../components/Buttons/GrayBorderButton";

class Support extends React.Component {
  constructor() {
    super();
    this.state = {
      clickCart: false,
      ShowContent: false,
    };
  }

  callBackClickCart = () => {
    this.setState({ clickCart: !this.state.clickCart });
  };

  ContentShowBtn = () => {
    if (this.state.ShowContent === true) {
      this.setState({
        ShowContent: false,
      });
    } else if (this.state.ShowContent === false) {
      this.setState({
        ShowContent: true,
      });
    }
  };

  render() {
    return (
      <div
        className={`Support ${
          this.state.clickCart === true ? "cartClicked" : ""
        }`}
      >
        <MainHeader clickCartHandler={this.callBackClickCart} />
        <section className="Support-Top">
          <div className="Support-Top-Wrap">
            <div className="Main-Text">
              <h1>
                Welcome to <br />
                Beats Support
              </h1>
            </div>
            <div className="Main-Img">
              <img src={Config.SupportHeroImg} alt="Main-top-img" />
            </div>
          </div>
        </section>
        <section className="SupportPopular">
          <div className="SupportPopularWrap">
            <div className="PopularImg">
              <img src={Config.SupportPopularImg} alt="popular topics" />
            </div>
            <div className="PopularContent">
              <div className="MainText">
                <h2>Popular Topics</h2>
              </div>
              <div className="ContentBox">
                <div className="Content">
                  <div
                    className="BluetoothPairing"
                    onClick={this.ContentShowBtn}
                  >
                    <button>
                      <h3>Bluetooth Pairing</h3>
                    </button>
                    <span>
                      <i class="fas fa-plus"></i>
                    </span>
                  </div>
                  <div
                    className={`ContentShow ${
                      this.state.ShowContent ? "ContentShowActive" : ""
                    }`}
                  >
                    <ul>
                      <li>
                        <a href="https://www.beatsbydre.com/support/how-to/bluetooth-troubleshooting">
                          CONNECT DEVICES WITH BLUETOOTH
                          <span>
                            <i class="fas fa-caret-right"></i>
                          </span>
                        </a>
                      </li>
                      <li>
                        <a href="https://www.beatsbydre.com/support/how-to/bluetooth-troubleshooting">
                          PAIR WITH MAC
                          <span>
                            <i class="fas fa-caret-right"></i>
                          </span>
                        </a>
                      </li>
                    </ul>
                  </div>
                </div>
                <div className="Content">
                  <div className="SoundHelp">
                    <button>
                      <h3>Sound Help</h3>
                    </button>
                    <span>
                      <i class="fas fa-plus"></i>
                    </span>
                  </div>
                  {/* <div>HEADPHONES AND EARPHONES</div>
                  <div>SPEAKERS</div> */}
                </div>
                <div className="Content">
                  <div className="FirmwareUpdates">
                    <button>
                      <h3>Firmware Updates</h3>
                    </button>
                    <span>
                      <i class="fas fa-plus"></i>
                    </span>
                  </div>
                  {/* <div>BEATS UPDATER</div> */}
                </div>
              </div>
            </div>
          </div>
        </section>
        <section className="Support-Res">
          <div className="Support-Res-Wrap">
            <div className="Main-Text">
              <h2>More Resoures</h2>
            </div>
            <div className="Tiles">
              <div className="Tile">
                <div className="Tile-Inner">
                  <h4>Service And Warranty</h4>
                  <p>
                    Find answers to all of your questions about service options,
                    warranty, and pricing in your country.
                  </p>
                  <div className="Btn">
                    <GrayBorderButton
                      text="VIEW SERVICE AND WARRANTY"
                      className="BlackBtn"
                    />
                  </div>
                </div>
              </div>
              <div className="Tile">
                <div className="Tile-Inner">
                  <h4>Register Your Beats</h4>
                  <p>
                    Tell us about your new Beats and get product updates and
                    special offers.
                  </p>
                  <div className="Btn">
                    <GrayBorderButton
                      text="REGISTER TOUR BEATS"
                      className="BlackBtn"
                    />
                  </div>
                </div>
              </div>
              <div className="Tile">
                <div className="Tile-Inner">
                  <h4>Update Your Beats</h4>
                  <p>
                    Check for software updates or rename your Beats and make it
                    your own.
                  </p>
                  <div className="Btn">
                    <GrayBorderButton
                      text="UPDATE YOUR BEATS"
                      className="BlackBtn"
                    />
                  </div>
                </div>
              </div>
              <div className="Tile">
                <div className="Tile-Inner">
                  <h4>Authorized Retailers</h4>
                  <p>
                    Shop for genuine Beats by Dr. Dre products at an Apple
                    Retail Store, Apple Online Store or authorized retailers.
                  </p>
                  <div className="Btn">
                    <GrayBorderButton
                      text="VIEW RETAILERS"
                      className="BlackBtn"
                    />
                  </div>
                </div>
              </div>
              <div className="Tile">
                <div className="Tile-Inner">
                  <h4>Safe Buying</h4>
                  <p>
                    Beats premium products attract consumers from around the
                    world. Make sure you buy the real deal.
                  </p>
                  <div className="Btn">
                    <GrayBorderButton
                      text="LEARN ABOUT SAFE BUYING"
                      className="BlackBtn"
                    />
                  </div>
                </div>
              </div>
              <div className="Tile">
                <div className="Tile-Inner">
                  <h4>Contact Us</h4>
                  <p>
                    Beats by Dr. Dre is part of Apple. Contact Apple for
                    support.
                  </p>
                  <div className="Btn">
                    <GrayBorderButton
                      text="CONTACT APPLE"
                      className="BlackBtn"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    );
  }
}
export default Support;
