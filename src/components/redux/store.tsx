import { configureStore } from "@reduxjs/toolkit";
import {cartReducer}  from './productSlice'
import _default from "react-redux/es/components/connect";

export const store = configureStore({
    reducer:{
        cart : cartReducer
    }
})