import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

const initialState = {
    dataCart: [],
    isLoading: false,
    hasError: false,
};

export const fetchCart = createAsyncThunk(
    'cart/fetchCart',
    async () => {
        const response = await axios.get(
            "http://localhost:3000/cart")
            // .then((resp) => {
    //         console.log(resp.data)
    //         return resp.data;
    //     }).catch((error) => {
    //         console.error(error);
    // })

    return response.data
}
)

const cartSlice = createSlice({
    name: "cart",
    initialState,
    reducers: {
        addToCart: (state, action) => {
            const newState = JSON.parse(JSON.stringify(state.dataCart))
            console.log("new", newState)
            console.log("action", action.payload)
            const sameProduct = newState.find((p) => 
                p.product_id === action.payload.product_id)
            //  && p.id === action.payload.id)
             if (sameProduct !== undefined) {
                const qty = { qty: parseInt(sameProduct.qty) + parseInt(action.payload.qty)};
                axios.put("http://localhost:3000/cart/" + sameProduct.product_id, {...sameProduct, ...qty})
            } else {
              axios.post("http://localhost:3000/cart", action.payload)
            }
        },
    },
    extraReducers: (builder) => {
        builder
          .addCase(fetchCart.pending, (state, action) => {
          state.isLoading = true;
          state.hasError = false;
        })
          .addCase(fetchCart.fulfilled, (state, action) => {
            state.dataCart = action.payload;
            state.isLoading = false;
            state.hasError = false
          })
          .addCase(fetchCart.rejected, (state, action) => {
            state.hasError = true
            state.isLoading = false;
          })
      }
});

export const {addToCart} = cartSlice.actions;
export default cartSlice.reducer