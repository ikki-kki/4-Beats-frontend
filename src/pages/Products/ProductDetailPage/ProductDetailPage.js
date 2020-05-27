import React from 'react';
import { withRouter } from 'react-router-dom';
import ProductHeader from './ProductHeader/ProductHeader';
import TextPiece from './TextPiece/TextPiece';
import Config from '../Config';
import './ProductDetailPage.scss';


class ProductDetailPage extends React.Component {
    render() {
        return(
            <div className="ProductDetailPage">
                <section className="headerWrapper">
                    <ProductHeader />
                    <div className="headerImage">
                        <div className="gradientOverlay"></div>
                        <img alt="powerbeats" src={`${Config[0].detailImage}01.jpg.large.2x.jpg`} />
                    </div>
                </section>
                <section className="mainContensBlackWrap">
                    <div className="sectionSpacing"></div>
                    <div className="imageAndText">
                        <div className="leftContent">
                            <img alt="skate" src={`${Config[0].detailImage}02.jpg.large.2x.jpg`} />
                        </div>
                        <div className="rightContent">
                            <TextPiece 
                                title="Ready when you are" 
                                inText="Seamlessly go from working out — to hanging out. Just leave them around your neck until you’re ready to listen again."/>
                            <div className="contentImageRight">
                                <img alt="man" src={`${Config[0].detailImage}03.jpg.large.2x.jpg`} />
                            </div>
                        </div>
                    </div>
                    <div className="sectionSpacing"></div>
                </section>
                <section className="mainContensHalfBlackWrap">
                    <div className="imgWrap">
                        <img alt="walking man" src={`${Config[0].detailImage}05.jpg.large.2x.jpg`} />
                        <div className="textWrap">
                            <TextPiece  
                                title="Bring on the long days" 
                                inText="With up to 15 hours of battery life, Powerbeats keep up with marathons, hikes, or multiple workout days in a single charge. And with Fast Fuel, a 5-minute charge gives up to 1 hour of playback when battery is low"/>
                            <div className="timeIcon">
                                <div className="timeInfo">
                                    <div className="infoTop">Up To</div>
                                    <div className="infoMiddle">15</div>
                                    <div className="infoBottom">Hours</div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
                <section>
                    <img alt="power beats" src={`${Config[0].detailImage}04.png.large.2x.png`} />
                </section>
            </div>
        )
    }
}

export default withRouter(ProductDetailPage);