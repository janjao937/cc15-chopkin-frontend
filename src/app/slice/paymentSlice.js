import {createAsyncThunk,createSlice} from "@reduxjs/toolkit";
import {BACKEND_URL} from "../../../env";
import axios from "../../config/axios";
import { stat } from "fs";

const payingURL = BACKEND_URL+"/payment/create-checkout-sessions";
const payingSuccessURL = BACKEND_URL+"/payment/update";

const initialState = {
    loading:false,
    error:"",
}

const paying = createAsyncThunk("payment/pay",async(req,thunkApi)=>{
    try{
        const res = await axios.post(payingURL,req);//{message,payment}
        return res.data;
    }
    catch(error){
        console.log(error);
        return thunkApi.rejectWithValue(error.message.status);
    }
});

const paymentSuccess = createAsyncThunk("payment/success",async(req,thunkApi)=>{
    try{
        const res = await axios.patch(payingSuccessURL,req);
        return res.data;
    }
    catch(error){
        console.log(error);
        return thunkApi.rejectWithValue(error.message.status);
    }
});


const paymentSlice = createSlice({
    name:"payment",
    initialState:initialState,
    extraReducers:(builder)=>{
        builder.addCase(paying.pending,(state)=>{
            state.loading = true;
        });
        builder.addCase(paying.fulfilled,(state,action)=>{
            //payload ={url,payment}
            state.loading = false;
            window.location = action.payload.url;
        });
        builder.addCase(paying.rejected,(state,action)=>{
            //payload = {error}
            state.loading = false;
            state.error = action.payload;
        });


        builder.addCase(paymentSuccess.pending,(state)=>{
            state.loading = true;
        });
        builder.addCase(paymentSuccess.fulfilled,(state)=>{
            state.loading = false;
        });
        builder.addCase(paymentSuccess.rejectWithValue,(state)=>{
            state.loading = false;
        });
    }

});


const paymentReducer = paymentSlice.reducer;
export default paymentReducer;

export {paying,paymentSuccess};