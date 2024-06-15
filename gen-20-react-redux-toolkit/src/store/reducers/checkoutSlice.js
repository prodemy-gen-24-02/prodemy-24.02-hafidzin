import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from 'axios'

const initialState = {
    dataCheckout: [],
    isLoading: false,
    hasError: false,
};


const checkoutSlice = createSlice({
    name: "checkout",
    initialState,
    reducers: {
        checkoutBooking: (state, action) => {
            
        },
    },
    // extraReducers: (builder) => {
    //     builder
    //       .addCase(fetchCart.pending, (state, action) => {
    //       state.isLoading = true;
    //       state.hasError = false;
    //     })
    //       .addCase(fetchCart.fulfilled, (state, action) => {
    //         state.dataCheckout = action.payload;
    //         state.isLoading = false;
    //         state.hasError = false
    //       })
    //       .addCase(fetchCart.rejected, (state, action) => {
    //         state.hasError = true
    //         state.isLoading = false;
    //       })
    //   }
});

export const { checkoutBooking } = checkoutSlice.actions;

export default checkoutSlice.reducer