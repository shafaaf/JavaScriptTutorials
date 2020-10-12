import {ADD_TO_CART, REMOVE_FROM_CART} from "../types";

export const addToCart = (newItem) => (dispatch, getState) => {
    console.log("getSTate is: ", getState.cart);
    const cartItems = getState.cart.cartItems.slice();
    let alreadyInCart = false;
    cartItems.forEach(item => {
        if (item._id === newItem._id) {
            item.count++;
            alreadyInCart = true;
        }
    });
    if (!alreadyInCart) {
        cartItems.push({...newItem, count: 1});
    }
    dispatch({
        type: ADD_TO_CART,
        payload: {cartItems}

    });
    localStorage.setItem("cartItems", JSON.stringify(cartItems));
}

export const removeFromCart = (existingItems, itemToRemove) => (dispatch) => {
    const cartItems = existingItems.slice().filter(item => item._id !== itemToRemove._id);
    dispatch({
        type: REMOVE_FROM_CART,
        payload: {cartItems}
    });
    localStorage.setItem("cartItems", JSON.stringify(cartItems));
}
