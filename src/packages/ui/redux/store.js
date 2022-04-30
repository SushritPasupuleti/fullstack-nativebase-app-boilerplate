// import { createStore, applyMiddleware } from 'redux';
// import thunk from 'redux-thunk';
import { configureStore } from '@reduxjs/toolkit';
import { createWrapper } from 'next-redux-wrapper';

import reducers from './reducers/index'; //Import the reducer


// Connect our store to the reducers
export const store = configureStore({
    reducer: reducers,
});

// Only for it to work with Next.js
const makeStore = () => store;

export const ReduxWrapperForNext = createWrapper(makeStore, {
    // debug: true
});