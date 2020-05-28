import React from 'react';
import { Link } from 'react-router-dom';
import ProductSpec from './ProductSpec/ProductSpec';
import './ProductHeader.scss';

class ProductHeader extends React.Component {
    render() {
        return(
            <div className="headerContentsWrapper">
                <div className="headerText">
                    <h1>Powerbeats</h1>
                    <div className="subWrap">
                        <span className="subTitle">Built to keep you moving</span>
                        <div className="subBody">The latest addition to the Powerbeats family brings high-performance wireless earphones to your active life.</div>
                    </div>
                    <div className="buyWrap">
                        <div className="buyBtn">
                            <Link to="/products/detail" className="btnWrapper">
                                <span>Buy</span>
                            </Link>
                        </div>
                        <div className="price">
                            <span>$149.95</span>
                        </div>
                    </div>
                    <div className="iconWrap">
                        < ProductSpec text="Up to 15 hours of listening time" url="https://www.beatsbydre.com/content/dam/beats/global/pdp-v2-icons/BatteryW.png" />
                        < ProductSpec text="Sweat & water resistant earphones" url="https://www.beatsbydre.com/content/dam/beats/global/pdp-v2-icons/W-small-waterproof.svg" />
                        < ProductSpec text="Streamlined, round cable" url="https://www.beatsbydre.com/content/dam/beats/global/pdp-v2-icons/round_cableW.png" />
                    </div>
                </div>
            </div>
        )
    }
}

export default ProductHeader;