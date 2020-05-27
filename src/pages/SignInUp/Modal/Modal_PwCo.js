import React from "react";
import './Modal_PwCo.scss';
import ReactTransitionGroup from 'react-addons-css-transition-group';
// import jQuery from "jquery";
// window.$ = window.jQuery = jQuery;

class Modal_PwCo extends React.Component{
  constructor(props){
    super(props);
    this.state = {
      isModalOpen: false, 
      BtnColor:true,
      email:"",
      password:"",
    }
  }

  inputValueEmail = (event) => {
    this.setState({
        email:event.target.value
    })
}

  buttonColorChange = () => {
    if (this.state.email.includes('@')){
        this.setState({BtnColor : false});
    }else {
        this.setState({BtnColor : true});
    }
}


  render(){
    return(
      <React.Fragment>
        {
          this.props.isOpen ?
          <ReactTransitionGroup
            transitionName={'Modal-anim'}
            transitionEnterTimeout={200}
            transitionLeaveTimeout={200}
          >
            <div className="Modal-PwCo-overlay" onClick={this.props.close} />
            <div className="loginForm-PwCo">
            <button className="closeBtn" onClick={this.props.close}><span class="material-icons">close</span></button>
              <div className ="mainTitle">
                <h2 className="title">Welcome back to Beats.</h2>
                <div className="subTitle">Please confirm your password</div>
              </div>
              <div className="content">
                <input onChange={this.inputValueEmail} onKeyUp ={this.buttonColorChange} className="TextInput" name="email" placeholder="Email address" type="email" />
              </div>
              <div className="addContent">
                 <input onChange={this.inputValueEmail} onKeyUp ={this.buttonColorChange} className="TextInput" name="password" placeholder="password" type="email" />
                 <button className="ForgottenPwBtn" type="button">Forgotten password?</button>
              </div>
              <div className="button-wrap">
                <button className ={this.state.BtnColor ? 'button' : 'BtnColorChange'}>Login</button>
              </div>
              
            </div>
          </ReactTransitionGroup>
          :
          <ReactTransitionGroup transitionName={'Modal-anim'} transitionEnterTimeout={200} transitionLeaveTimeout={200} />
        }  
          </React.Fragment>
    
    )
  }
}
export default Modal_PwCo;

 