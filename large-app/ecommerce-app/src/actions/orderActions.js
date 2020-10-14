import { CREATE_ORDER, CLEAR_CART, CLEAR_ORDER, FETCH_ORDERS } from "../types";

export const createOrder = (order) => (dispatch) => {
    console.log("createOrder action called with order: ", order);
    fetch("http://localhost:5000/api/orders", {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify(order),
    })
        .then((res) => res.json())
        .then((data) => {
            dispatch({
                type: CREATE_ORDER,
                payload: data
            });
            localStorage.removeItem("cartItems");
            dispatch({ type: CLEAR_CART });
        });
};

export const clearOrder = () => (dispatch) => {
    dispatch({type: CLEAR_ORDER });
};

export const fetchOrders = () => (dispatch) => {
    fetch("http://localhost:5000/api/orders")
        .then((res) => res.json())
        .then((data) => {
            dispatch({
                type: FETCH_ORDERS,
                payload: data
            });
        });
};
