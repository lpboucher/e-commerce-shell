import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchProducts } from '../actions';

class ProductList extends Component {
    constructor() {
        super();
        this.getProducts = this.getProducts.bind(this);
    }

    componentDidMount() {
       /* this.props.fetchProducts();*/
      }

    getProducts() {
        this.props.fetchProducts();
    }
    
    renderProducts() {
        return this.props.products.map(product => {
            return <p key={product._id}>{product.title}</p>
        })
    }
    
    render(){
          return(
            <div>
              {this.renderProducts()}
              <div onClick={this.getProducts}>Get it!</div>
            </div>
          )
    }
}

function mapStateToProps({products}) {
    return { products: products };
}

export default connect(mapStateToProps, {fetchProducts})(ProductList);