import React from 'react';
import {combineReducers} from 'redux';
import productsReducer from './productsReducer';
import cartReducer from './cartReducer';
import messageReducer from './messageReducer';

const appReducers = combineReducers({
    products: productsReducer,
    cart: cartReducer,
    message: messageReducer
})

export default appReducers;