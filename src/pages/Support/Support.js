import React from "react";
import Config from "./Config";
import MainHeader from "../../components/Headers/MainHeader/MainHeader";
import GrayBorderButton from "../../components/Buttons/GrayBorderButton";
import GoTop from "../../components/GoTop/GoTop";
import Footers from "../../components/Footers/Footers";
import "./Support.scss";

class Support extends React.Component {
  constructor() {
    super();
    this.state = {
      clickCart: false,
      isActive: 0,
    };
  }

  callBackClickCart = () => {
    this.setState({ clickCart: !this.state.clickCart });
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

  render() {
    return (
      <div className="Support">
        <GoTop />
        <MainHeader />
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
                <div
                  className={`ContentBluetooth ${
                    this.state.ShowContentBluetooth
                      ? "ContentBluetoothColor"
                      : ""
                  }`}
                >
                  <div
                    className="BluetoothDropBtn"
                    onClick={() => this.handleOptionSelect(1)}
                  >
                    <button>
                      <h3>Bluetooth Pairing</h3>
                    </button>
                    <i
                      className={`fas fa-plus ${
                        this.state.isActive === 1 ? "iconActive" : ""
                      }`}
                    ></i>
                  </div>
                  <div
                    className={`ContentShow ${
                      this.state.isActive === 1 ? "" : "ContentShowActive"
                    }`}
                  >
                    <ul>
                      <li className="Line1">
                        <a href="https://www.beatsbydre.com/support/how-to/bluetooth-troubleshooting">
                          CONNECT DEVICES WITH BLUETOOTH
                          <span>
                            <i className="fas fa-caret-right"></i>
                          </span>
                        </a>
                      </li>
                      <li className="Line2">
                        <a href="https://www.beatsbydre.com/support/how-to/bluetooth-troubleshooting">
                          PAIR WITH MAC
                          <span>
                            <i className="fas fa-caret-right"></i>
                          </span>
                        </a>
                      </li>
                    </ul>
                  </div>
                </div>
                <div className="ContentSound">
                  <div
                    className="SoundHelpDropBtn"
                    onClick={() => this.handleOptionSelect(2)}
                  >
                    <button>
                      <h3>Sound Help</h3>
                    </button>
                    <i
                      className={`fas fa-plus ${
                        this.state.isActive === 2 ? "iconActive" : ""
                      }`}
                    ></i>
                  </div>
                  <div
                    className={`ContentShow ${
                      this.state.isActive === 2 ? "" : "ContentShowActive"
                    }`}
                  >
                    <ul>
                      <li className="Line2-1">
                        <a href="https://www.beatsbydre.com/support/how-to/sound-troubleshooting-headphones">
                          HEADPHONES AND EARPHONES
                          <span>
                            <i className="fas fa-caret-right"></i>
                          </span>
                        </a>
                      </li>
                      <li className="Line2-2">
                        <a href="https://www.beatsbydre.com/support/how-to/sound-troubleshooting-speakers">
                          SPEAKERS
                          <span>
                            <i className="fas fa-caret-right"></i>
                          </span>
                        </a>
                      </li>
                    </ul>
                  </div>
                </div>
                <div className="ContentFirmware">
                  <div
                    className="FirmwareDropBtn"
                    onClick={() => this.handleOptionSelect(3)}
                  >
                    <button>
                      <h3>Firmware Updates</h3>
                    </button>
                    <i
                      className={`fas fa-plus ${
                        this.state.isActive === 3 ? "iconActive" : ""
                      }`}
                    ></i>
                  </div>
                  <div
                    className={`ContentShow ${
                      this.state.isActive === 3 ? "" : "ContentShowActive"
                    }`}
                  >
                    <ul className="LineFirmware">
                      <li>
                        <a href="https://www.beatsbydre.com/support/how-to/firmware-updates-beats-updater">
                          BEATS UPDATER
                          <span>
                            <i className="fas fa-caret-right"></i>
                          </span>
                        </a>
                      </li>
                    </ul>
                  </div>
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
                      link="https://support.apple.com/beats/repair/service"
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
                      link="https://support.apple.com/beats/repair/service"
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
                      link="https://support.apple.com/beats/repair/service"
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
                      link="https://support.apple.com/beats/repair/service"
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
                      link="https://support.apple.com/beats/repair/service"
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
                      link="https://support.apple.com/beats/repair/service"
                      className="BlackBtn"
                    />
                  </div>
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
export default Support;
