import { combineReducers } from 'redux';
import { products, productHasErrored } from './productsReducer';

export default combineReducers({
    products,
    productHasErrored
});
