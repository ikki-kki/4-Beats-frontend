import React from 'react';
import { withRouter } from 'react-router-dom';
import ProductCard from './ProductCard/ProductCard';
import './ProductsArticles.scss';

class ProductsArticles extends React.Component {
    render() {
        const { lists } = this.props;
        console.log(this.props)
        const makeCard = lists && lists.map((list, idx) => (
            <ProductCard key={list.id} image={list.image} name={list.name} title={list.title} specLists={list.list} price={list.price}  />
        ))
        return(
            <div className="ProductsArticles">
                <section className="productTitle">
                    <h2 >High‑performance <br/>wireless earphones</h2>
                </section>
                <div className="sectionSpacingStart"></div>
                { makeCard }
            </div>
        )
    }
}

export default withRouter(ProductsArticles);