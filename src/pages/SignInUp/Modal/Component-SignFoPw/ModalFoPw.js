import React from 'react';
import ReactTransitionGroup from 'react-addons-css-transition-group';
import './ModalFoPw.scss';


class ModalFoPw extends React.Component{
    constructor(props){
        super(props);
        this.state = {
          isModalOpen: false, 
          BtnColor:true,
          focused:false,
        }
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
            <>
        {
          this.props.isOpen ?
          <ReactTransitionGroup
            transitionName={'Modal-anim'}
            transitionEnterTimeout={200}
            transitionLeaveTimeout={200}
          >
            <div className="Modal-signIn-overlay" onClick={this.props.close} />
            <div className="loginForm-signIn">
            <button className="closeBtn" onClick={this.props.close}><span class="material-icons">close</span></button>
              <div className ="mainTitle">
                <h2 className="title">Forgotten password?</h2>
                <div className="subTitle">We will send you a link you can use to create a now password.</div>
              </div>
              <div className="content">
                <input onChange={this.inputValueEmail} onKeyUp ={this.buttonColorChange} className="TextInput" name="email" placeholder="Email address" type="email" />
              </div>
              <div className="button-wrap">
                <button className ={this.state.BtnColor ? 'button' : 'BtnColorChange'}>Send</button>
              </div>
              <button className="GoToLogin" type="button">Login</button>

              
            </div>
          </ReactTransitionGroup>
          :
          <ReactTransitionGroup transitionName={'Modal-anim'} transitionEnterTimeout={200} transitionLeaveTimeout={200} />
        }  
          </>
    
        )
    }
}

export default ModalFoPw;