import React from "react";
import ReactTransitionGroup from "react-addons-css-transition-group";
import Config from "../../Config";
import { ValidationEmail } from "../../Utils";
import { ValidationPassword } from "../../Utils";

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

  buttonColorChange = () => {
    const { email, password, password_re } = this.state;
    if (email.includes("@") || password === password_re) {
      this.setState({ BtnColor: false });
    } else {
      this.setState({ BtnColor: true });
    }
  };

  //이메일 중복검사
  checkEmail = (e) => {
    e.preventDefault();
    //이메일 유효성 검사 함수

    ValidationEmail();

    if (ValidationEmail(this.state.email) === false) {
      alert("Email is invalid");
      this.setState({
        email: "",
      });
    } else {
      fetch(Config.SignUpEmailCheckAPI, {
        method: "POST",
        headers: {
          "Content-type": "application/json",
        },
        body: JSON.stringify({
          email: this.state.email,
        }),
      })
        .then((response) => response.json())
        .then((response) => {
          if (response.status === 200) {
            localStorage.setItem("token", response.token);
            alert("Available Email");
            this.setState({
              emailCheck: this.state.email,
            });
            console.log(this.state.emailCheck);
          } else {
            alert("This email already exists.");
          }
        });
    }
  };
  //첫번째 두번째 패스워드 일치 확인

  CheckPw = (e) => {
    e.preventDefault();

    //비밀번호 유효성 검사 (영문, 숫자 혼합 6~20)
    ValidationPassword();
    if (ValidationPassword(this.state.password_re) === false) {
      alert("영문, 숫자를 혼합하여 6~12자 이내");
      this.setState({
        password: "",
        password_re: "",
      });
    } else {
      alert("사용가능한 비번");
      if (this.state.password === this.state.password_re) {
        this.setState({
          passwordCheck: this.state.password_re,
        });
      }
    }
  };

  handleClickEvent = () => {
    const {
      email,
      password,
      emailCheck,
      passwordCheck,
      password_re,
      first_name,
      last_name,
    } = this.state;

    if (
      email &&
      password &&
      password_re &&
      email === emailCheck &&
      password === password_re &&
      password === passwordCheck &&
      first_name &&
      last_name
    ) {
      fetch(Config.SignUpBtnAPI, {
        method: "POST",

        body: JSON.stringify({
          email: this.state.emailCheck,
          password: this.state.passwordCheck,
          password_re: this.state.password_re,
          first_name: this.state.first_name,
          last_name: this.state.last_name,
        }),
      }).then((response) => {
        if (response.status === 200) {
          localStorage.setItem("token", response.token);
          this.props.switch();
        }
      });
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
            <div className="SignUp">
              <div
                className="Modal-SignUp-overlay"
                onClick={this.props.close}
              />
              <div className="loginForm">
                <div className="Component-SignUp">
                  <button className="gotobackBtn" onClick={this.props.changeCo}>
                    <span className="material-icons">navigate_before</span>
                  </button>
                  <button
                    className="closeBtn-signUp"
                    onClick={this.props.close}
                  >
                    <span className="material-icons">close</span>
                  </button>
                  <div className="mainTitle">
                    <h2 className="title">
                      It seems you are new to us. <br /> Welcome to Beats
                    </h2>
                    <div className="subTitle">
                      To create an account, please enter your details below
                    </div>
                  </div>
                  <div className="content1">
                    <button onClick={this.checkEmail}>check</button>
                    <input
                      onChange={this.inputValueEmail}
                      onKeyUp={this.buttonColorChange}
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
                        onKeyUp={this.buttonColorChange}
                        className="TextInput"
                        name="password"
                        placeholder="Password"
                        type="password"
                      />
                    </div>
                    <div className="content3">
                      <button onClick={this.CheckPw}>check</button>
                      <input
                        onChange={this.inputValuePwCo}
                        onKeyUp={this.buttonColorChange}
                        className="TextInput"
                        name="password"
                        placeholder="Confirm your password"
                        type="password"
                      />
                    </div>
                    <div className="content4">
                      <div className="content4-1">
                        <input
                          onChange={this.inputValueFN}
                          onKeyUp={this.buttonColorChange}
                          className="TextInput"
                          name="firstname"
                          placeholder="First name"
                          type="name"
                        />
                      </div>
                      <div className="content4-2">
                        <input
                          onChange={this.inputValueLN}
                          onKeyUp={this.buttonColorChange}
                          className="TextInput"
                          name="lastname"
                          placeholder="Last name"
                          type="name"
                        />
                      </div>
                    </div>
                  </div>
                  <div className="button-wrap">
                    <button
                      className={
                        this.state.BtnColor ? "button" : "BtnColorChange"
                      }
                      onClick={this.handleClickEvent}
                    >
                      Register
                    </button>
                  </div>
                  <div className="haveAccount">
                    <button
                      className="havaAccountBtn"
                      onClick={this.props.changeCo}
                    >
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
