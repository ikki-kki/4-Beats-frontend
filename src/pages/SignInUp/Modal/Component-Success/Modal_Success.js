import React from 'react';
import './Modal_Success.scss';

class Modal_Success extends React.Component{
    constructor(props){
        super(props);
        this.state = {
          isModalOpen: false, 
          BtnColor:true,
          LabelColor:true,
          focused:false,
          email:"",
          
        }
      }

    render(){
        return(
            <div className="Component-Success">
                        <button className="crossBtn" onClick={this.props.close}><span class="material-icons">close</span></button>
                        <div className ="mainTitle">
                             <h2 className="title">Thank you, {} {}</h2>
                            <div className="subTitle">Your Beats account is now active.</div>
                        </div>

                        <div className="button-wrap">
                            <button className ='button'>View your account details</button>
                        </div>
                        <div className="AddCloseBtn"><button className="CloseBtn">Close</button></div>

                </div>
        )
    }
}
export default Modal_Success;