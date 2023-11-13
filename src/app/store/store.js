import {configureStore} from "@reduxjs/toolkit";
import paymentReducer from "../slice/paymentSlice";

const store = configureStore({
    reducer:{
        payment:paymentReducer,
    }
});

export default store;