import React from 'react';
import { withRouter } from "react-router-dom";
import ProductsArticles from './ProductsArticles/ProductsArticles';


class Products extends React.Component {
    constructor() {
        super();
        this.state = {
            productsList : [],
            productsListSec : {
                sec1: [],
                sec2: [],
                sec3: [],
                sec4: [],
                sec5: [],
                sec6: []
            }
        }
    }
    componentDidMount() {
        fetch("http://localhost:3001/data/productList.json")
            .then(res => res.json())
            // .then(res => console.log(res))
            .then(res => this.setState({
                productsList : res
            }))
            
            // .then(res => (
            //     res.data.map((a) => (
            //         if(a.section == 1) {
            //             this.setState({
            //                 productsListSec : {
            //                     sec1: a
            //                 }
            //             })
            //         } else if (a.section == 2) {
            //             this.setState({
            //                 productsListSec : {
            //                     sec2: a
            //                 }
            //             })
            //         } else if (a.section == 3) {
            //             this.setState({
            //                 productsListSec : {
            //                     sec3: a
            //                 }
            //             })
            //         } else if (a.section == 4) {
            //             this.setState({
            //                 productsListSec : {
            //                     sec4: a
            //                 }
            //             })
            //         } else if (a.section == 5) {
            //             this.setState({
            //                 productsListSec : {
            //                     sec5: a
            //                 }
            //             })
            //         } else if (a.section == 6) {
            //             this.setState({
            //                 productsListSec : {
            //                     sec6: a
            //                 }
            //             })
            //         }
            //     ))
            // ))
    }
    render() {
        return(
            <>
                <ProductsArticles lists={this.state.productsList.data}/>
            </>
        )
    }
}

export default withRouter(Products);