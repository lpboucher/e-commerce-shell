import React, { Component } from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import { connect } from 'react-redux';
import * as actions from '../actions';

import Header from './Header';
import ProductList from './ProductList';

const Products = () => <h2>Products</h2>;

class App extends Component {

  render() {
    return (
      <div>
        <BrowserRouter>
          <div>
            <Header></Header>
            <ProductList></ProductList>
            <Route exact path="/" component={Products}></Route>
          </div>
        </BrowserRouter>
      </div>
    );
  }
}

export default connect(null, actions)(App);
