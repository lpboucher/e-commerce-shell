import axios from 'axios';
import { PRODUCT_HAS_ERRORED, PRODUCTS_FETCH_DATA_SUCCESS } from './types';

export const productHasErrored = (bool) => {
    return {
        type: PRODUCT_HAS_ERRORED,
        hasErrored: bool,
    };
}

export const productsFetchDataSuccess = (products) => {
    return {
        type: PRODUCTS_FETCH_DATA_SUCCESS,
        products,
    };
}

export const fetchProducts = () => async dispatch => {
    try {
        const res = await axios.get('/api/product');
        console.log(res.data);
        dispatch(productsFetchDataSuccess(res.data));
    } catch(e) {
        console.log(e);
        dispatch(productHasErrored(true))
    }
    /*dispatch({type: FETCH_PRODUCT, payload: res.data});*/
};
