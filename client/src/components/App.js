import React, { Component } from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import { connect } from 'react-redux';
import * as actions from '../actions';

import Header from './Header';
import ProductWrapper from './ProductWrapper';
import Cart from './Cart';

class App extends Component {

  render() {
    return (
      <div>
        <BrowserRouter>
          <div>
            <Header></Header>
            <Route exact path='/' component={ProductWrapper}/>
            <Route path='/cart' component={Cart}/>
          </div>
        </BrowserRouter>
      </div>
    );
  }
}

export default connect(null, actions)(App);
