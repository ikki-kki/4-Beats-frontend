import React from "react";
import { withRouter } from "react-router-dom";
import ReactTransitionGroup from "react-addons-css-transition-group";
import { API } from "../../Config";

import "./ModalSignIn.scss";

class ModalSignIn extends React.Component {
  constructor() {
    super();
    this.state = {
      BtnColor: true,
      // SignUpOpen: true,
      email: "",
      password: "",
      AlarmOpen: 0,
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

  BtnActive = () => {
    const { email, password } = this.state;
    if (email.includes("@") && password.length >= 8) {
      this.setState({ BtnColor: false });
    } else {
      this.setState({ BtnColor: true });
    }
  };

  handleBtnClickEvent = () => {
    fetch(`${API}/login`, {
      method: "POST",
      body: JSON.stringify({
        email: this.state.email,
        password: this.state.password,
      }),
    })
      .then((res) => res.json())
      .then((res) => {
        console.log("response", res);
        if (res.Authorization && res.full_name) {
          localStorage.setItem("Authorization", res.Authorization);
          localStorage.setItem("full_name", res.full_name);
          this.props.history.push("/products");
          window.location.reload();
        } else {
          this.BtnActive();
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
    const { close, changeCo } = this.props;
    return (
      <>
        {this.props.isOpen ? (
          <ReactTransitionGroup
            transitionName={"Modal-anim"}
            transitionEnterTimeout={200}
            transitionLeaveTimeout={200}
          >
            <div className="SignIn">
              <div className="Modal-SignIn-overlay" onClick={close} />
              <div className="loginForm-SignIn">
                <button className="closeBtn" onClick={close}>
                  <span className="material-icons">close</span>
                </button>
                <div className="mainTitle">
                  <h2 className="title">Welcome back to Beats.</h2>
                  <div className="subTitle">Please confirm your password</div>
                </div>
                <div className="contentInputEmail">
                  <label>
                    <input
                      onChange={this.inputValueEmail}
                      onKeyUp={this.BtnActive}
                      className="TextInput"
                      name="email"
                      placeholder="Email address"
                      type="email"
                    />
                  </label>
                  <p className="TextAlarm">
                    Please enter a valid email address
                  </p>
                </div>

                <div className="contentInputPw">
                  <input
                    onChange={this.inputValuePw}
                    onKeyUp={this.BtnActive}
                    className="TextInput"
                    name="password"
                    placeholder="Password"
                    type="password"
                  />
                </div>

                <div className="SignInBtn-wrap">
                  <button
                    className={
                      this.state.BtnColor ? "DefaultBtn" : "BtnColorChange"
                    }
                    onClick={this.handleBtnClickEvent}
                  >
                    Login
                  </button>
                </div>
                <div className="GotoSignUp">
                  <button
                    className="SignUpBtn"
                    onClick={changeCo}
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
export default withRouter(ModalSignIn);
