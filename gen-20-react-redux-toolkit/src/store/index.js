import {configureStore} from "@reduxjs/toolkit"
import checkoutSlice from "./reducers/checkoutSlice"

import authSlice from "./reducers/authSlice";
import cartSlice, { fetchCart } from "./reducers/cartSlice";

const store = configureStore({
    reducer: {
        auth: authSlice,
        cart: cartSlice,
        checkout: checkoutSlice,
    }
});

store.dispatch(fetchCart());
export default store