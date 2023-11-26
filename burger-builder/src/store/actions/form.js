import * as actionTypes from "./actionTypes";
import burgerbuilder from "../../api/burgerbuilder";

export const successForm = () => {
    return {
        type: actionTypes.SUCCESS_FORM,
    };
};

export const failForm = (payload) => {
    return {
        type: actionTypes.FAIL_FORM,
        payload,
    };
};

export const loadForm = () => {
    return {
        type: actionTypes.LOAD_FORM,
    };
};

export const endSuccess = () => {
    return {
        type: actionTypes.END_SUCCESS,
    };
};
export const submitForm = (payload, history, token) => async (dispatch) => {
    try {
        dispatch(loadForm());
        await burgerbuilder.post("/orders.json?auth=" + token, payload);
        dispatch(successForm());
        setTimeout(() => {
            dispatch(endSuccess());
            history.push("/");
        }, 2000);
    } catch (err) {
        dispatch(failForm(err.message));
    }
};
