import { CHECKOUT_BOOKING, DELETE_BOOKING } from "../type";
import { DECREASE_QTY } from "../type";

export const checkoutBooking = (data) => ({
    type: CHECKOUT_BOOKING,
    payload: data,
});

export const deleteBooking = (productId) => ({
    type: DELETE_BOOKING,
    payload: productId
});

export const decreaseQty = (productId) => ({
    type: DECREASE_QTY,
    payload: productId
})
// export const increaseQty = (productId) => ({
//     type: DELETE_BOOKING,
//     payload: productId
// })
