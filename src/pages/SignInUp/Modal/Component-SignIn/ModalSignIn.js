import React from "react";
import ReactTransitionGroup from "react-addons-css-transition-group";
import Config from "../../Config";
import "./ModalSignIn.scss";

class ModalSignIn extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      BtnColor: true,
      // SignUpOpen: true,
      email: "",
      password: "",
    };
  }

  inputValueEmail = (event) => {
    this.setState({
      email: event.target.value,
    });
  };
  inputValuePw = (event) => {
    this.setState({
      password: event.target.value,
    });
  };

  buttonColorChange = () => {
    if (this.state.email.includes("@") && this.state.password.length >= 5) {
      this.setState({ BtnColor: false });
    } else {
      this.setState({ BtnColor: true });
    }
  };

  handleBtnClickEvent = () => {
    console.log("clicked");
    fetch(Config.SignInAPI, {
      method: "POST",
      body: JSON.stringify({
        email: this.state.email,
        password: this.state.password,
      }),
    })
      .then((response) => response.json())
      .then((response) => {
        if (response.token) {
          localStorage.setItem("token", response.token);
          this.props.history.push("/products");
        }
      });
  };

  menuHandler = (e) => {
    console.log(e.target.id);
    if (e.target.id === "SignIn") {
      this.setState({ menuIdx: 0 });
    }
  };

  render() {
    return (
      <>
        {this.props.isOpen ? (
          <ReactTransitionGroup
            transitionName={"Modal-anim"}
            transitionEnterTimeout={200}
            transitionLeaveTimeout={200}
          >
            <div className="SignIn">
              <div
                className="Modal-SignIn-overlay"
                onClick={this.props.close}
              />
              <div className="loginForm-SignIn">
                <button className="closeBtn" onClick={this.props.close}>
                  <span className="material-icons">close</span>
                </button>
                <div className="mainTitle">
                  <h2 className="title">Welcome back to Beats.</h2>
                  <div className="subTitle">Please confirm your password</div>
                </div>
                <div className="contentInputEmail">
                  <input
                    onChange={this.inputValueEmail}
                    onKeyUp={this.buttonColorChange}
                    className="TextInput"
                    name="email"
                    placeholder="Email address"
                    type="email"
                  />
                </div>
                <div className="contentInputPw">
                  <input
                    onChange={this.inputValuePw}
                    onKeyUp={this.buttonColorChange}
                    className="TextInput"
                    name="password"
                    placeholder="Password"
                    type="password"
                  />
                </div>

                <div className="SignInBtn-wrap">
                  <button
                    className={
                      this.state.BtnColor ? "button" : "BtnColorChange"
                    }
                    onClick={this.handleBtnClickEvent}
                  >
                    Login
                  </button>
                </div>
                <div className="SignUpB">
                  <button
                    className="SignUpBtn"
                    onClick={this.props.changeCo}
                    type="button"
                    id="SignIn"
                  >
                    Sign Up
                  </button>
                </div>
              </div>
            </div>
          </ReactTransitionGroup>
        ) : (
          <ReactTransitionGroup
            transitionName={"Modal-anim"}
            transitionEnterTimeout={200}
            transitionLeaveTimeout={200}
          />
        )}
      </>
    );
  }
}
export default ModalSignIn;
