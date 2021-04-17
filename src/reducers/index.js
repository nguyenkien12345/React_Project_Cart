import React from 'react';
import {combineReducers} from 'redux';
import productsReducer from './productsReducer';
import cartReducer from './cartReducer';

const appReducers = combineReducers({
    products: productsReducer,
    cart: cartReducer
})

export default appReducers;