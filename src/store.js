import React from 'react';
import { createStore } from 'redux';
import appReducers from './reducers/index';

const store = createStore(
    appReducers,
    // Kết nối REDUX TOOL CỦA GOOGLE
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__()
    );

export default store;