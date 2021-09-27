import { combineReducers } from 'redux';
import cartReducer from './cartReducer';
import messageReducer from './messageReducer';
import productsReducer from './productsReducer';

const appReducers = combineReducers({
    products: productsReducer,
    cart: cartReducer,
    message: messageReducer
})

export default appReducers;