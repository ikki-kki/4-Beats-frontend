import React from "react";
import ReactTransitionGroup from "react-addons-css-transition-group";
import "./ModalSignIn.scss";

class ModalSignIn extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isModalOpen: false,
      BtnColor: true,
      SignUpOpen: true,
      email: "",
      password: "",
    };
  }

  inputValueEmail = (event) => {
    this.setState({
      email: event.target.value,
    });
    console.log(event.target.value);
  };
  inputValuePw = (event) => {
    this.setState({
      password: event.target.value,
    });
    console.log(event.target.value);
  };

  buttonColorChange = () => {
    if (this.state.email.includes("@") && this.state.password.length >= 5) {
      this.setState({ BtnColor: false });
    } else {
      this.setState({ BtnColor: true });
    }
  };

  handleBtnClickEvent() {
    fetch("API", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        email: this.state.email,
        password: this.state.password,
      }),
    })
      .then((response) => response.json())
      .then((response) => console.log(response));
  }

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

                  <button
                    className="SignInBtn"
                    onClick={this.props.changeCo}
                    type="button"
                  >
                    Sign Up
                  </button>

                  <button className="ForgottenPwBtn" type="button">
                    Forgotten password?
                  </button>
                </div>
                <div className="button-wrap">
                  <button
                    className={
                      this.state.BtnColor ? "button" : "BtnColorChange"
                    }
                    onClick={this.handleBtnClickEvent}
                  >
                    Login
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
