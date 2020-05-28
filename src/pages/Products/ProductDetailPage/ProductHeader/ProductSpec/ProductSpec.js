import React from 'react';
import './ProductSpec.scss';

class ProductSpec extends React.Component {
    render() {
        const { text, url } = this.props
        return(
            <section className="ProductSpec">
                <div className="iconWrap">
                    <div className="icons">
                        <img alt="icon" src={ url } />
                    </div>
                </div>
                <div className="textWrap">
                    <div className="text">{ text }</div>
                </div>
            </section>
        )
    }
}

export default ProductSpec;