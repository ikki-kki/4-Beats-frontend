import React from "react";
import ReactTransitionGroup from "react-addons-css-transition-group";
import {
  ValidationEmail,
  ValidationPassword,
} from "../../../../utils/SignInUp/Utils";
import { API } from "../../Config";

import "./ModalSignUp.scss";

class ModalSignUp extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      // isModalOpen: false,
      BtnColor: true,
      email: "",
      password: "",
      password_re: "",
      last_name: "",
      first_name: "",
      emailAlarm: 0,
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

  inputValuePwCo = (event) => {
    this.setState({
      password_re: event.target.value,
    });
  };

  inputValueFN = (event) => {
    this.setState({
      first_name: event.target.value,
    });
  };

  inputValueLN = (event) => {
    this.setState({
      last_name: event.target.value,
    });
  };

  BtnActive = () => {
    const { password, password_re, first_name, last_name } = this.state;
    if (password === password_re) {
      if (first_name && last_name) {
        this.setState({ BtnColor: false });
      }
    } else {
      this.setState({ BtnColor: true });
    }
  };

  checkSignUp = () => {
    this.checkCycle();
  };

  checkCycle = () => {
    const { email, password, password_re, first_name, last_name } = this.state;
    if (email || password || password_re || first_name || last_name) {
      this.checkEmail();
    } else {
      alert("CHECK!!");
    }
  };

  checkEmail = () => {
    if (!ValidationEmail(this.state.email)) {
      alert("Email is invalid");
    } else {
      this.checkPassword();
    }
  };

  checkPassword = () => {
    ValidationPassword();
    if (ValidationPassword(this.state.password_re) === false) {
    } else {
      if (this.state.password === this.state.password_re) {
        this.handleClickEvent();
      }
    }
  };

  FetchRegister = () => {
    fetch(`${API}/register`, {
      method: "POST",

      body: JSON.stringify({
        email: this.state.email,
        password: this.state.password,
        first_name: this.state.first_name,
        last_name: this.state.last_name,
      }),
    }).then((res) => {
      if (res.ok) {
        localStorage.setItem("Authorization", res.Authorization);
        alert("WELCOME TO THE BEATS");
        this.props.switch();
      }
    });
  };

  handleClickEvent = () => {
    const { email, password, password_re, first_name, last_name } = this.state;

    if (
      email &&
      password &&
      password_re &&
      password === password_re &&
      first_name &&
      last_name
    ) {
      this.FetchRegister();
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
            <div className="SignUp">
              <div className="Modal-SignUp-overlay" onClick={close} />
              <div className="loginForm">
                <div className="Component-SignUp">
                  <div className="BackCloseBtn">
                    <button className="gotobackBtn" onClick={changeCo}>
                      <span className="material-icons">navigate_before</span>
                    </button>
                    <button className="closeBtn-signUp" onClick={close}>
                      <span className="material-icons">close</span>
                    </button>
                  </div>
                  <div className="mainTitle">
                    <h2 className="title">
                      It seems you are new to us. <br /> Welcome to Beats
                    </h2>
                    <div className="subTitle">
                      To create an account, please enter your details below
                    </div>
                  </div>
                  <div className="content1">
                    <input
                      onChange={this.inputValueEmail}
                      className="TextInput"
                      name="email"
                      placeholder="Email address"
                      type="email"
                    />
                  </div>
                  <div className="addContent">
                    <div className="content2">
                      <input
                        onChange={this.inputValuePw}
                        onKeyUp={this.BtnActive}
                        className="TextInput"
                        name="password"
                        placeholder="Password"
                        type="password"
                      />
                    </div>
                    <div className="content3">
                      <input
                        onChange={this.inputValuePwCo}
                        onKeyUp={this.BtnActive}
                        className="TextInput"
                        name="password"
                        placeholder="Confirm your password"
                        type="password"
                      />
                      <div className="TextAlarm">
                        Please enter the password you used previously
                      </div>
                    </div>
                    <div className="content4">
                      <div className="content4-1">
                        <input
                          onChange={this.inputValueFN}
                          onKeyUp={this.BtnActive}
                          className="TextInput"
                          name="firstname"
                          placeholder="First name"
                          type="name"
                        />
                      </div>
                      <div className="content4-2">
                        <input
                          onChange={this.inputValueLN}
                          onKeyUp={this.BtnActive}
                          className="TextInput"
                          name="lastname"
                          placeholder="Last name"
                          type="name"
                        />
                      </div>
                    </div>
                  </div>
                  <div className="SignInBtn-wrap">
                    <button
                      className={
                        this.state.BtnColor ? "DefaultBtn" : "BtnColorChange"
                      }
                      onClick={this.checkSignUp}
                    >
                      Register
                    </button>
                  </div>
                  <div className="haveAccount">
                    <button className="havaAccountBtn" onClick={changeCo}>
                      Do you already have an Beats account?
                    </button>
                  </div>
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
export default ModalSignUp;
