import { CHECKOUT_BOOKING, DECREASE_QTY, DELETE_BOOKING } from "../type";

const initialState = {
    dataCheckout: [],
};

const checkoutReducer = (state = initialState, action) => {
    switch (action.type) {
        case CHECKOUT_BOOKING:
        return {
            ...state,
            dataCheckout: action.payload
        }
        case DELETE_BOOKING:
        return {
            ...state,
            dataCheckout: state.dataCheckout.filter((data) => data != action.payload)
        }
        // case DECREASE_QTY:
        // return {
        //     ...state,
        //     dataCheckout: state.dataCheckout((checkout) => )
        // }
        default:
            return state;
    }
};

export default checkoutReducer