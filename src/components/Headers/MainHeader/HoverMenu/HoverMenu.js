import React, { Component } from 'react';
import './Earphones.scss';
import { headerData } from '../../../../utils/HeaderData/HeaderData';
import { headerMain } from '../../../../utils/HeaderData/HeaderData';
class HoverMenu extends Component {
  constructor(props) {
    super(props);
    this.state = {
      class : ''
    }
  }

  //hover시 state가 변하는 함수
  render() {
    console.log("헤더 props: ", this.props)
    console.log("헤더 데이터: ", headerData[this.props.name])
    //console.log("헤더 클래스: ", this.state.class)
    return (
      <div className="Earphones">
        <div className="main-img-box">
          {
            headerMain[this.props.name].data.map((data,i) => {
              return(
                <img className="main-img" key={i} src={data.img} alt=""/>
              )
            })
          }
        </div>
        <div className="sub-imgs-container">
          {
            headerData[this.props.name].data.map((data, i) => {
               return (
                  <div className="sub-imgs-box" key={i} >
                  <img className="sub-img" src={data.img} alt="" />
                  <span className="sub-image-title">{data.name}</span>
                </div>
              )
            }
            )
          }
        </div>
      </div>
    );
  }
}
//sub-imgs-container를 맵돌고 그것들을 변수에 저장해서 넣기
export default HoverMenu