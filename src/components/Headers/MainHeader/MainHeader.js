import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import './MainHeader.scss'
import HoverMenu from './HoverMenu/HoverMenu'

export default class MainHeader extends Component {
  constructor(){
    super();
    this.state = {
      menuIdx:0,
      hover:false
    }
  }

  /**
   * e.target.className을 받기
   * className 이 설정한 클래스 이름과 같으면
   * 데이터를 자식 컴포넌트에게 넘겨주고
   * 자식에서 해당 데이터와 제이슨 데이터 이름으로 if문 만들고
   */
  menuHandler = (e) =>{
    console.log(e.target.id)
    if (e.target.id === 'Earphones'){
      this.setState ({ menuIdx: 0})
    } else if (e.target.id === 'HeadPhones'){
      this.setState ({ menuIdx: 1 })
    } else if (e.target.id === 'Speaker'){
      this.setState ({ menuIdx: 2 })
    }
  }

  render() {
    //console.log(this.state.menuIdx)
    return (
      <main style={{
        height: '100vh', width: '100%',
        background: 'blue', margin: '0 auto'
      }}>
        <nav>
          <ul>
            <li>
              <Link to="/" className="headerLink">
                <img className="logo" alt="" src="https://www.beatsbydre.com/content/dam/beats/global/logos/beats-logo-161616.png" />
              </Link>
            </li>
            <li>
              <Link to="/" className="headerLink">
                STORIES
              </Link>
              <div className="hovermenu">
                <Link to="/products" className="headerLink">
                  PRODUCTS
                </Link>
                <span className="material-icons"
                >expand_more</span>
              </div>
              <Link to="/support" className="headerLink">
                SUPPORT
              </Link>
            </li>
            <li>
              <button className="login">LOGIN</button>
              <button className="btnDefault" type="button"></button>
            </li>
          </ul>
          <div className="hover-container">
            <ul className="hover-ul">
              <span>PRODUCTS</span>
              <li className="hover-menus"
                id="Earphones"
                onMouseEnter={this.menuHandler}
                >Earphones</li>
              <li className="hover-menus"
                id="HeadPhones"
                onMouseEnter={this.menuHandler}
                >HeadPhones</li>
              <li className="hover-menus"
                id="Speaker"
                onMouseEnter={this.menuHandler}
                >Speaker</li>
            </ul>
            <HoverMenu name={this.state.menuIdx}/>
          </div>
        </nav>
      </main>
    )
  }
}

// {/* <Link to="/" className="headerLink">
// <img className="navimg" alt="" src="https://www.beatsbydre.com/etc/designs/apps/beats/resources/img/global/icon-search-dark.svg" />
// </Link> */}