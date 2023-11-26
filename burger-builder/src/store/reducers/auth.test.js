import reducer from "./auth";
import * as actionTypes from "../actions/actionTypes";

describe("Auth Reducer", () => {
    let initialState;
    beforeEach(() => {
        initialState = {
            loading: false,
            error: null,
            token: null,
            user: null,
        };
    });
    it("Should return initialState for initialization", () => {
        expect(reducer(undefined, {})).toEqual(initialState);
    });

    it("Should return old state for invaid action types", () => {
        expect(reducer(initialState, { type: "foo" })).toEqual(initialState);
    });

    it("Should store token for auth success", () => {
        expect(
            reducer(initialState, {
                type: actionTypes.SUCCESS_AUTH,
                payload: { idToken: "Token", localId: "localId", email: "email" },
            })
        ).toEqual({
            loading: false,
            error: null,
            token: "Token",
            user: { id: "localId", email: "email" },
        });
    });
});
