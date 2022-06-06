import {  combineReducers } from 'redux';
import { configureStore } from '@reduxjs/toolkit';
import { CartReducer } from './reducers/CartReducer';


const reducer = combineReducers({
    cart : CartReducer,
})

export const store = configureStore({
    reducer,
})