import React from 'react';
import ModalSignIn from './Modal/Component-SignIn/ModalSignIn'
// import Modal_SignUp from './Modal/Component-SignUp/Modal_SignUp';
// import Modal_PwCo from './Modal/Component-SignPwCo/Modal_PwCo';
// import Modal_FoPw from './Modal/Component-SignFoPw/Modal_FoPw'
// import SignForm from './Modal/SignForm';
import './SignInUp.scss';


class SignInUp extends React.Component{
    constructor(props){
        super(props);
        this.state = {
          isModalOpen: false,
        }
      }

    
      
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
            <ModalSignIn isOpen={this.state.isModalOpen} close={this.closeModal} ColorChange={this.buttonColorChange} />
        </main>
        )
    }
}

export default SignInUp; 