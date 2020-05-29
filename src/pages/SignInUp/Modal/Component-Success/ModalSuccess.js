import React from "react";
import ReactTransitionGroup from "react-addons-css-transition-group";
import "./ModalSuccess.scss";

class ModalSuccess extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isModalOpen: false,
      BtnColor: true,
    };
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
            <div className="Modal-Success-overlay" onClick={this.props.close} />
            <div className="loginForm-Success">
              <div className="Component-Success">
                <button className="crossBtn" onClick={this.props.close}>
                  <span class="material-icons">close</span>
                </button>
                <div className="mainTitle">
                  <h2 className="title">
                    Thank you, __ ___ {} {}
                  </h2>
                  <div className="subTitle">
                    Your Beats account is now active.
                  </div>
                </div>

                <div className="button-wrap">
                  <button className="button">View your account details</button>
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
export default ModalSuccess;
