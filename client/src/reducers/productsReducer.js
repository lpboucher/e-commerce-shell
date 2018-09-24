import { PRODUCT_HAS_ERRORED, PRODUCTS_FETCH_DATA_SUCCESS } from '../actions/types';

export function products(state = [], action) {
    console.log(action);
    switch(action.type) {
        case PRODUCTS_FETCH_DATA_SUCCESS:
            return action.products || false;
        default:
            return state;
    }
}

export function productHasErrored(state = false, action) {
    switch (action.type) {
        case PRODUCT_HAS_ERRORED:
            return action.hasErrored;
        default:
            return state;
    }
}
