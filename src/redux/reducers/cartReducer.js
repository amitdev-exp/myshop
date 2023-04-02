import { ActionTypes } from "../constants/action.types";


const initialState = {
    carts: [],
}
export const cartReducer = (state = initialState, { type, payload }) => {
    switch (type) {
        case ActionTypes.SET_CARTS:
            return { ...state, carts: payload };
        default:
            return state;
    }
}

export const selectedCartReducer = (state = {}, { type, payload }) => {
    switch (type) {
        case ActionTypes.SELECTED_CART:
            return { ...state, ...payload };
        case ActionTypes.REMOVE_SELECTED_CART:
            return { };
        default:
            return state;
    }
}