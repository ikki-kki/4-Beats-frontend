import React from "react";
import ReactTransitionGroup from 'react-addons-css-transition-group';
import './ModalSignIn.scss';
// import jQuery from "jquery";
// window.$ = window.jQuery = jQuery;

class ModalSignIn extends React.Component{
  constructor(props){
    super(props);
    this.state = {
      isModalOpen: false, 
      BtnColor:true,
      EmailCheck:true,
      email:"",
      
    }
  }

  // SignUpView =() =>{
  //   if(this.state.email &&  )
  //   this.setState({
  //     EmailCheck:true
  //   })
  // }

  

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
          <div className ="SignIn">
              <div className="Modal-signIn-overlay" onClick={this.props.close} />
              <div className="loginForm">
                  <div className="Component-SignIn">
                          <button className="closeBtn" onClick={this.props.close}><span class="material-icons">close</span></button>
                          
                          <div className ={this.state.EmailCheck ? 'mainTitle' :'mainTitle_2'}>
                              <h2 className="title">Welcome to the Beats.</h2>
                              <div className="subTitle">Please enter a vaild email address</div>
                          </div>

                          {this.state.email.length > 0 && <div className ="mainTitle-Second">
                              <h2 className="title">It seems you are new to us. Welcome to Beats</h2>
                              <div className="subTitle">To create an account, please enter your details below</div>
                          </div>
                          }

                          <div className="content">
                              <input onChange={this.inputValueEmail} onKeyUp ={this.buttonColorChange} className="TextInput" name="email" placeholder="Email address" type="email" />
                          </div>

                          <div className="button-wrap">
                              <button className ={this.state.BtnColor ? 'button' : 'BtnColorChange'}>Continue</button>
                          </div>
                  </div>
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
export default ModalSignIn;

 