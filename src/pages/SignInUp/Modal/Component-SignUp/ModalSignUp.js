import React from "react";
import ReactTransitionGroup from "react-addons-css-transition-group";
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
      password_confirm: event.target.value,
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
    if (this.state.email.includes("@")) {
      this.setState({ BtnColor: false });
    } else {
      this.setState({ BtnColor: true });
    }
  };

  //이메일 중복검사
  checkEmail = (e) => {
    e.preventDefault();
    //이메일 유효성 검사 함수
    const chkEmail = (str) => {
      var regExp = /^[0-9a-zA-Z]([-_.]?[0-9a-zA-Z])*@[0-9a-zA-Z]([-_.]?[0-9a-zA-Z])*.[a-zA-Z]{2,3}$/i;
      return regExp.test(str) ? true : false;
    };
    if (chkEmail(this.state.email) === false) {
      alert("Email is invalid");
      this.setState({
        email: "",
      });
    } else {
      fetch("API", {
        method: "POST",
        body: JSON.stringify({
          email: this.state.email,
        }),
      })
        .then((response) => response.json())
        .then((response) => {
          if (response.token === true) {
            alert("사용가능 한 아이디입니다");
            this.setState({
              emailCheck: this.state.email,
            });
          } else {
            alert("이미 존재하는 아이디입니다");
          }
        });
    }
  };
  //첫번째 두번째 패스워드 일치 확인

  CheckPw = (e) => {
    e.preventDefault();

    //비밀번호 유효성 검사 (영문, 숫자 혼합 6~20)
    const CheckPwd = (str) => {
      var reg_pwd = /^.*(?=.{6,20})(?=.*[0-9])(?=.*[a-zA-Z]).*$/;
      return !reg_pwd.test(str) ? false : true;
    };

    if (CheckPwd(this.state.password_re) === false) {
      alert("영문, 숫자를 혼합하여 6~12자 이내");
      this.setState({
        password: "",
        password_re: "",
      });
    } else {
      if (this.state.password === this.state.password_re) {
        this.setState({
          passwordCheck: this.state.password_re,
        });
      }
    }
  };

  handleClickEvent = () => {
    fetch("API", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        email: this.state.emailCheck,
        password: this.state.passwordCheck,
        first_name: this.state.first_name,
        last_name: this.state.last_name,
      }),
    })
      .then((response) => response.json())
      .then((response) => {
        if (response.token) {
          localStorage.setItem("token", response.token);
          this.props.switch();
        }
      });
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
