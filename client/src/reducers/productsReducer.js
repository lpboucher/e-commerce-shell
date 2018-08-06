import { FETCH_PRODUCT } from '../actions/types';

export default function(state = [], action) {
    console.log(action);
    switch(action.type) {
        case FETCH_PRODUCT:
            return action.payload || false;
        default:
            return state;
    }
}