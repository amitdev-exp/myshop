import { ActionTypes } from "../constants/action.types"
export const setCarts = (carts) => {
    return {
        type: ActionTypes.SET_CARTS,
        payload: carts
    }
}

export const selectedCart = (cart) => {
    return {
        type: ActionTypes.SELECTED_CART,
        payload: cart
    }
}

export const removeSelectedCart = () => {
    return {
        type: ActionTypes.REMOVE_SELECTED_CART,
    }
}

