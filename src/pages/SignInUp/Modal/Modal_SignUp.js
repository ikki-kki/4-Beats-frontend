import React from "react";
import './Modal_SignUp.scss';
import ReactTransitionGroup from 'react-addons-css-transition-group';
import Modal_SignUp_com from "./Modal_SignUp_com";
// import jQuery from "jquery";
// window.$ = window.jQuery = jQuery;

class Modal_SignUp extends React.Component{
  constructor(props){
    super(props);
    this.state = {
      isModalOpen: false, 
      BtnColor:true,
      email:"",
      password:"",
      last_name:"",
      first_name:"",
    }
  }

    inputValueEmail = (event) => {
    this.setState({
        email:event.target.value
    })
}
    inputValuePw = (event) => {
    this.setState({
        password:event.target.value
    })
}
    inputValueLN = (event) => {
    this.setState({
        last_name:event.target.value
    })
}
    inputValueFN = (event) => {
    this.setState({
        first_name:event.target.value
    })
}

  buttonColorChange = () => {
    if (this.state.email.includes('@')){
        this.setState({BtnColor : false});
    }else {
        this.setState({BtnColor : true});
    }
}



// handleClickEvent(){
//     fetch('http://10.58.4.172:8000/account/singin', {
//         method:'POST',
//         headers:{
//             'Content-Type':'application/json',
//         },
//         body: JSON.stringify({
//             email:this.state.loginEmail,
//             password:this.state.loginPw
//         })
//     })
//     .then(response => response.json())
//     .then(response => {
//         if (response.token){
//             localStorage.setItem('token', response.token);
//             this.props.history.push('/')
//         }else{
//             alert("")
//         }
//     })
// }



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
        {/* <div className="Modal-inner"> */}
            <div className="Modal-signUp-overlay" onClick={this.props.close} />
            <div className="loginForm-signUp">
                <button className="gotobackBtn"><span class="material-icons">navigate_before</span></button>
                <button className="closeBtn-signUp" onClick={this.props.close}><span class="material-icons">close</span></button>
                <div className ="mainTitle">
                    <h2 className="title">It seems you are new to us. Welcome to Beats</h2>
                    <div className="subTitle">To create an account, please enter your details below</div>
                </div>
                    <div className="content1">
                        <input onChange={this.inputValueEmail} onKeyUp ={this.buttonColorChange} className="TextInput" name="email" placeholder="Email address" type="email" />
                        {/* <span className="TextLabel">Email address</span> */}
                    </div>
                <Modal_SignUp_com />

                {/* <div className="addContent"> 
                    <div className="content2">
                        <input onChange={this.inputValuePw} onKeyUp ={this.buttonColorChange} className="TextInput" name="password" placeholder="Password" type="password" />
                        
                    </div>
                    <div className="content3">
                        <input onChange={this.inputValue} onKeyUp ={this.buttonColorChange} className="TextInput" name="password" placeholder="Confirm your password" type="password" />
                       
                    </div>
                    <div className="content4">
                        <div className="content4-1">
                            <input onChange={this.inputValueFN} onKeyUp ={this.buttonColorChange} className="TextInput" name="firstname" placeholder="First name" type="name" />
                            
                        </div>
                        <div className="content4-2">
                            <input onChange={this.inputValueLN} onKeyUp ={this.buttonColorChange} className="TextInput" name="lastname" placeholder="Last name" type="name" />
                            
                        </div>
                    </div>
                </div> */}
              <div className="button-wrap">
                <button className ={this.state.BtnColor ? 'button' : 'BtnColorChange'}>Register</button>
              </div>
              <div className="haveAccount"><button className="havaAccountBtn">Do you already have an Beats account?</button></div>
              
            
          
        </div>
          </ReactTransitionGroup>
          :
          <ReactTransitionGroup transitionName={'Modal-anim'} transitionEnterTimeout={200} transitionLeaveTimeout={200} />
        }  
          </React.Fragment>
    
    )
  }
}
export default Modal_SignUp;

 