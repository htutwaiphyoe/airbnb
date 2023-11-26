import * as actionTypes from "../actions/actionTypes";
import { updateObject } from "../../utils/utils";
const initialState = {
    loading: false,
    error: null,
    success: false,
};

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case actionTypes.FAIL_FORM:
            return updateObject(state, { error: action.payload, loading: false });
        case actionTypes.LOAD_FORM:
            return updateObject(state, { loading: true });
        case actionTypes.SUCCESS_FORM:
            return updateObject(state, { success: true, loading: false, error: null });
        case actionTypes.END_SUCCESS:
            return updateObject(state, { success: false });
        default:
            return state;
    }
};

export default reducer;
