import React from 'react';
import {combineReducers} from 'redux';
import productsReducer from './productsReducer';

const appReducers = combineReducers({
    pruducts: productsReducer
})

export default appReducers;