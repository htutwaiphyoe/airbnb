import * as actionTypes from "../actions/actionTypes";
import { updateObject } from "../../utils/utils";
const initialState = {
    loading: false,
    error: null,
    token: null,
    user: null,
};

const successAuth = (state, action) => {
    return updateObject(state, {
        loading: false,
        error: null,
        token: action.payload.idToken,
        user: { id: action.payload.localId, email: action.payload.email },
    });
};

const logout = (state, action) => {
    return updateObject(state, { token: null, user: null });
};
const reducer = (state = initialState, action) => {
    switch (action.type) {
        case actionTypes.SHOW_AUTH_LOADING:
            return updateObject(state, { loading: true, error: null });
        case actionTypes.SHOW_ERROR:
            return updateObject(state, { error: action.payload, loading: false });
        case actionTypes.SUCCESS_AUTH:
            return successAuth(state, action);
        case actionTypes.LOGOUT:
            return logout(state, action);
        default:
            return state;
    }
};

export default reducer;
