import React from "react";
import './Modal_SignIn.scss';
// import jQuery from "jquery";
// window.$ = window.jQuery = jQuery;

class Modal_SignIn extends React.Component{
  constructor(props){
    super(props);
    this.state = {
      isModalOpen: false, 
      BtnColor:true,
      LabelColor:true,
      focused:false,
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
                <div className="Component-SignIn">
                        <button className="closeBtn" onClick={this.props.close}><span class="material-icons">close</span></button>
                        <div className ="mainTitle">
                            <h2 className="title">Welcome to the Beats.</h2>
                            <div className="subTitle">Please enter a vaild email address</div>
                        </div>

                        <div className="content">
                            <input onChange={this.inputValueEmail} onKeyUp ={this.buttonColorChange} className="TextInput" name="email" placeholder="Email address" type="email" />
                        </div>

                        <div className="button-wrap">
                            <button className ={this.state.BtnColor ? 'button' : 'BtnColorChange'}>Continue</button>
                        </div>
                </div>
    )
  }
}
export default Modal_SignIn;

 