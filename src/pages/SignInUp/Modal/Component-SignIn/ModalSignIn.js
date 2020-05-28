import React from "react";
import ReactTransitionGroup from "react-addons-css-transition-group";
import "./ModalSignIn.scss";

class ModalSignIn extends React.Component {
  constructor() {
    super();
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
  };

  inputValuePw = (event) => {
    this.setState({
      password: event.target.value,
    });
  };

  buttonColorChange = () => {
    const { email, password } = this.state; // destructuring

    if (email.includes("@") && password.length >= 5) {
      this.setState({ BtnColor: false });
    } else {
      this.setState({ BtnColor: true });
    }
  };

  // handleBtnClickEvent(){
  //   fetch('http://10.58.4.172:8000/account/singin', {
  //       method:'POST',
  //       headers:{
  //           'Content-Type':'application/json',
  //       },
  //       body: JSON.stringify({
  //           email:this.state.loginEmail,
  //           password:this.state.loginPw
  //       })
  //   })
  //   .then(response => response.json())
  //   .then(response => {
  //       if (response.token){
  //           localStorage.setItem('token', response.token);
  //           this.props.history.push(' ')
  //       }else{
  //           alert(' ')
  //       }
  //   })
  // }

  render() {
    return (
      <>
        {this.props.isOpen ? (
          <ReactTransitionGroup
            transitionName={"Modal-anim"}
            transitionEnterTimeout={200}
            transitionLeaveTimeout={200}
          >
            <div className="Modal-PwCo-overlay" onClick={this.props.close} />
            <div className="loginForm-PwCo">
              <button className="closeBtn" onClick={this.props.close}>
                <span className="material-icons">close</span>
              </button>
              <div className="mainTitle">
                <h2 className="title">Welcome back to Beats.</h2>
                <div className="subTitle">Please confirm your password</div>
              </div>
              <div className="contentInputEmail">
                <input
                  className="TextInput"
                  onChange={this.inputValueEmail}
                  onKeyUp={this.buttonColorChange}
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
                  className="SignUpBtn"
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
                  className={this.state.BtnColor ? "button" : "BtnColorChange"}
                >
                  Login
                </button>
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
