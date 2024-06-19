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
    return response.data
}
)

const cartSlice = createSlice({
    name: "cart",
    initialState,
    reducers: {
        addToCart: (state, action) => {
            const sameProduct = state.dataCart.find((p) => 
                p.product_id === action.payload.product_id
             && p.userId === action.payload.userId)
             console.log(sameProduct);
             if (sameProduct !== undefined) {
                const qty = { qty: parseInt(sameProduct.qty) + parseInt(action.payload.qty)};
                axios.put("http://localhost:3000/cart/" + sameProduct.id, {...sameProduct, ...qty})
            } else {
              axios.post("http://localhost:3000/cart", action.payload)
            }
            
        },
        deleteFromCart: (state, action) => {
          const sameProduct = state.dataCart.find((p) => 
            p.id === action.payload)
          axios.delete("http://localhost:3000/cart/" + sameProduct.id)
        },
        minusQty: (state, action) => {
          const sameProduct = state.dataCart.find((p) => 
            p.id === action.payload)
          const qty = { qty: parseInt(sameProduct.qty) - 1};
          axios.put("http://localhost:3000/cart/" + sameProduct.id, {...sameProduct, ...qty})
        },
        plusQty: (state, action) => {
          const sameProduct = state.dataCart.find((p) => 
            p.id === action.payload)
          const qty = { qty: parseInt(sameProduct.qty) + 1};
          axios.put("http://localhost:3000/cart/" + sameProduct.id, {...sameProduct, ...qty})
        }

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

export const { addToCart, deleteFromCart , minusQty, plusQty } = cartSlice.actions;
export default cartSlice.reducer