import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchProducts } from '../actions';

import CircularProgress from '@material-ui/core/CircularProgress';
import Button from '@material-ui/core/Button';
import AddIcon from '@material-ui/icons/Add';

import ProductList from './ProductList';

class ProductWrapper extends Component {
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
    
    render(){
          return(
              <div>
                    {this.props.products ? (
                        <ProductList products={this.props.products} />
                    ) : (
                        <CircularProgress/>
                    )}
                    <Button onClick={this.getProducts} variant="fab" color="primary" aria-label="Add">
                        <AddIcon />
                    </Button>
              </div>
          )
    }
}

function mapStateToProps({products}) {
    return { products: products };
}

export default connect(mapStateToProps, {fetchProducts})(ProductWrapper);