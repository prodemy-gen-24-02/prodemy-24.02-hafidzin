import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";
import { useDispatch } from "react-redux";

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
          const newState = JSON.parse(JSON.stringify(state.dataCart))
          const sameProduct = newState.find((p) => 
            p.id === action.payload)
          axios.delete("http://localhost:3000/cart/" + sameProduct.id)
        },
        minusQty: (state, action) => {
          const newState = JSON.parse(JSON.stringify(state.dataCart))
          const sameProduct = newState.find((p) => 
            p.id === action.payload)
          const qty = { qty: parseInt(sameProduct.qty) - 1};
          axios.put("http://localhost:3000/cart/" + sameProduct.id, {...sameProduct, ...qty})
        },
        plusQty: (state, action) => {
          const newState = JSON.parse(JSON.stringify(state.dataCart))
          const sameProduct = newState.find((p) => 
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