import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchProducts } from '../actions';

import CircularProgress from '@material-ui/core/CircularProgress';
import Button from '@material-ui/core/Button';
import AddIcon from '@material-ui/icons/Add';

import ProductList from './ProductList';

class ProductWrapper extends Component {
    componentDidMount() {
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
                    <Button variant="fab" color="primary" aria-label="Add">
                        <AddIcon />
                    </Button>
              </div>
          )
    }
}

function mapStateToProps(state) {
    return { 
        products: state.products,
        hasErrored: state.hasErrored
    };
};

function mapDispatchToProps(dispatch) {
    return {
        fetchProducts: () => dispatch(fetchProducts())
    };
}

export default connect(mapStateToProps, mapDispatchToProps)(ProductWrapper);