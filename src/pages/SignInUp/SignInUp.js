import React from 'react';
import Modal_SignIn from './Modal/Modal_SignIn'
import Modal_SignUp from './Modal/Modal_SignUp';
import Modal_PwCo from './Modal/Modal_PwCo';
import Modal_SignUp_com from './Modal/Modal_SignUp_com'
import Modal_FoPw from './Modal/Modal_FoPw'
import './SignInUp.scss';

class SignInUp extends React.Component{
    constructor(props){
        super(props);
        this.state = {
          isModalOpen: false,
        }
      }

      // ColorChange=()=>[
      //   this.setState({
      //     BtnColor:true
      //   })
      // ]
      
      openModal = () => {
        this.setState({ isModalOpen: true });
      }
      
      closeModal = () => {
        this.setState({ isModalOpen: false }); 
      }
 
      
    
    render(){
        return(
        <main className="App">
            <div className="loginTap">
                <span onClick={this.openModal}>로그인</span>
                
            </div>
            <Modal_SignUp isOpen={this.state.isModalOpen} close={this.closeModal} ColorChange={this.buttonColorChange} />
        </main>
        )
    }
}

export default SignInUp; 