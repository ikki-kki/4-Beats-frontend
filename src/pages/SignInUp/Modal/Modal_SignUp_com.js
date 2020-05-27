import React from "react";
import './Modal_SignUp_com.scss';
import ReactTransitionGroup from 'react-addons-css-transition-group';
// import jQuery from "jquery";
// window.$ = window.jQuery = jQuery;

class Modal_SignUp_com extends React.Component{
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
      
                <div className="addContent"> 
                    <div className="content2">
                        <input onChange={this.inputValuePw} onKeyUp ={this.buttonColorChange} className="TextInput" name="password" placeholder="Password" type="password" />
                        {/* <span className="TextLabel">password</span> */}
                    </div>
                    <div className="content3">
                        <input onChange={this.inputValue} onKeyUp ={this.buttonColorChange} className="TextInput" name="password" placeholder="Confirm your password" type="password" />
                        {/* <span className="TextLabel">Confirm your password</span> */}
                    </div>
                    <div className="content4">
                        <div className="content4-1">
                            <input onChange={this.inputValueFN} onKeyUp ={this.buttonColorChange} className="TextInput" name="firstname" placeholder="First name" type="name" />
                            {/* <span className="TextLabel">First name</span> */}
                        </div>
                        <div className="content4-2">
                            <input onChange={this.inputValueLN} onKeyUp ={this.buttonColorChange} className="TextInput" name="lastname" placeholder="Last name" type="name" />
                            {/* <span className="TextLabel">Last name</span> */}
                        </div>
                    </div>
                </div>
    )
  }
}
export default Modal_SignUp_com;

 