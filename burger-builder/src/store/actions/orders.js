import * as actionTypes from "./actionTypes";
import burgerbuilder from "../../api/burgerbuilder";

const storeOrders = (payload) => {
    return {
        type: actionTypes.FETCH_ORDERS,
        payload,
    };
};

const failOrders = (payload) => {
    return {
        type: actionTypes.FAIL_ORDERS,
        payload,
    };
};

const showOrderLoading = () => {
    return {
        type: actionTypes.SHOW_ORDER_LOADING,
    };
};
export const fetchOrders = (token, userid) => async (dispatch) => {
    try {
        dispatch(showOrderLoading());
        const response = await burgerbuilder.get(
            `/orders.json?auth=${token}&orderBy="userid"&equalTo="${userid}"`
        );
        let orders = [];
        for (let i in response.data) {
            orders.push({ id: i, ...response.data[i] });
        }
        dispatch(storeOrders(orders));
    } catch (err) {
        dispatch(failOrders(err.message));
    }
};
