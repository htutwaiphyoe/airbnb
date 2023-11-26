import * as actionTypes from "../actions/actionTypes";
import { updateObject } from "../../utils/utils";
const initialState = {
    orders: [],
    loading: false,
    error: null,
};

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case actionTypes.FETCH_ORDERS:
            return updateObject(state, { orders: action.payload, loading: false, error: null });
        case actionTypes.FAIL_ORDERS:
            return updateObject(state, { error: action.payload, loading: false });
        case actionTypes.SHOW_ORDER_LOADING:
            return updateObject(state, { loading: true });
        default:
            return state;
    }
};

export default reducer;
