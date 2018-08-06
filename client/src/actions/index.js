import axios from 'axios';
import { FETCH_PRODUCT } from './types';

export const fetchProducts = () => async dispatch => {
    const res = await axios.get('/api/product');
    
    dispatch({type: FETCH_PRODUCT, payload: res.data}); //maybe change to res.hello
};