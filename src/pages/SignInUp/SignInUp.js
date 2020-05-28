import React from "react";
import ModalSignIn from "./Modal/Component-SignIn/ModalSignIn";
import ModalSignUp from "./Modal/Component-SignUp/ModalSignUp";
// import ModalSuccess from './Modal/Component-Success/ModalSuccess'
import "./SignInUp.scss";

class SignInUp extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isModalOpen: false,
      loginState: true,
    };
  }

  openModal = () => {
    this.setState({ isModalOpen: true });
  };

  closeModal = () => {
    this.setState({ isModalOpen: false });
  };

  handleOnClickEvent = () => {
    this.setState({ loginState: false });
  };

  handleLoginTrue = () => {
    this.setState({ loginState: true });
  };

  render() {
    return (
      <main className="SignInUp">
        <div className="loginTap">
          <span onClick={this.openModal}>로그인</span>
        </div>
        {/* <ModalSuccess changeCo={this.handleOnClickEvent} isOpen={this.state.isModalOpen} close={this.closeModal} ColorChange={this.buttonColorChange}/> */}
        {this.state.loginState ? (
          <ModalSignIn
            changeCo={this.handleOnClickEvent}
            isOpen={this.state.isModalOpen}
            close={this.closeModal}
            ColorChange={this.buttonColorChange}
          />
        ) : (
          <ModalSignUp
            changeCo={this.handleLoginTrue}
            isOpen={this.state.isModalOpen}
            close={this.closeModal}
          />
        )}
      </main>
    );
  }
}

export default SignInUp;
