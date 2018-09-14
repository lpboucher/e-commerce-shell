import React, { Component } from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import { connect } from 'react-redux';
import * as actions from '../actions';

import Header from './Header';
import ProductWrapper from './ProductWrapper';

class App extends Component {

  render() {
    return (
      <div>
        <BrowserRouter>
          <div>
            <Header></Header>
            <ProductWrapper></ProductWrapper>
          </div>
        </BrowserRouter>
      </div>
    );
  }
}

export default connect(null, actions)(App);
