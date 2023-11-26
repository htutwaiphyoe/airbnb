import * as actionTypes from "./actionTypes";
import axios from "axios";
export const showAuthLoading = () => {
    return {
        type: actionTypes.SHOW_AUTH_LOADING,
    };
};

export const showError = (payload) => {
    return {
        type: actionTypes.SHOW_ERROR,
        payload,
    };
};
export const successAuth = (payload) => {
    return {
        type: actionTypes.SUCCESS_AUTH,
        payload,
    };
};

export const logout = () => {
    localStorage.removeItem("burgerbuilder-token");
    localStorage.removeItem("burgerbuilder-token-expiresIn");
    localStorage.removeItem("burgerbuilder-user");
    return {
        type: actionTypes.LOGOUT,
    };
};

export const expireAuth = (expiresIn) => (dispatch) => {
    setTimeout(() => {
        dispatch(logout());
    }, expiresIn * 1000);
};
export const auth = (email, password, isSignUp) => async (dispatch) => {
    try {
        dispatch(showAuthLoading());
        let url =
            "https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=AIzaSyDPzyFa_HGilMMFSeS4jWUmvTQh8kkGzko";
        if (!isSignUp) {
            url =
                "https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=AIzaSyDPzyFa_HGilMMFSeS4jWUmvTQh8kkGzko";
        }
        const response = await axios.post(url, {
            email,
            password,
            returnSecureToken: true,
        });
        const expireDate = new Date(new Date().getTime() + response.data.expiresIn * 1000);
        localStorage.setItem("burgerbuilder-token", response.data.idToken);
        localStorage.setItem(
            "burgerbuilder-user",
            JSON.stringify({
                email: response.data.email,
                id: response.data.localId,
            })
        );
        localStorage.setItem("burgerbuilder-token-expiresIn", expireDate);
        dispatch(successAuth(response.data));
        dispatch(expireAuth(response.data.expiresIn));
    } catch (err) {
        dispatch(showError(err.response.data.error));
    }
};

export const checkLocalstorage = () => (dispatch) => {
    const token = localStorage.getItem("burgerbuilder-token");
    if (!token) {
        dispatch(logout());
    } else {
        const user = JSON.parse(localStorage.getItem("burgerbuilder-user"));
        const expiresIn = new Date(localStorage.getItem("burgerbuilder-token-expiresIn"));

        if (new Date() > expiresIn) {
            dispatch(logout());
        } else {
            dispatch(successAuth({ idToken: token, localId: user.id, email: user.email }));
            dispatch(expireAuth((expiresIn - new Date()) / 1000));
        }
    }
};
 