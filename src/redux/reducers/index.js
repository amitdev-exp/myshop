import { combineReducers } from 'redux';
import { cartReducer, selectedCartReducer } from './cartReducer';

const reducers = combineReducers({
    allCarts: cartReducer,
    cart: selectedCartReducer,
});

export default reducers;