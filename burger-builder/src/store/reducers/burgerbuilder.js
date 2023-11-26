import * as actionTypes from "../actions/actionTypes";
import { updateObject } from "../../utils/utils";
const initialState = {
    ingredients: null,
    price: 2,
    error: null,
    loading: false,
    building: false,
};
const INGREDIENT_PRICE = {
    Salad: 0.4,
    Bacon: 0.7,
    Cheese: 0.5,
    Meat: 1.5,
};

const initIngredients = (state, action) => {
    return updateObject(state, {
        ingredients: {
            Salad: action.payload.Salad,
            Bacon: action.payload.Bacon,
            Cheese: action.payload.Cheese,
            Meat: action.payload.Meat,
        },
        price: 2,
        loading: false,
        error: null,
        building: false,
    });
};
const addIngredient = (state, action) => {
    return updateObject(state, {
        ingredients: {
            ...state.ingredients,
            [action.payload]: state.ingredients[action.payload] + 1,
        },
        price: state.price + INGREDIENT_PRICE[action.payload],
    });
};

const removeIngredient = (state, action) => {
    return updateObject(state, {
        ingredients: {
            ...state.ingredients,
            [action.payload]: state.ingredients[action.payload] - 1,
        },
        price: state.price - INGREDIENT_PRICE[action.payload],
    });
};
const reducer = (state = initialState, action) => {
    switch (action.type) {
        case actionTypes.INIT_INGREDIENTS:
            return initIngredients(state, action);
        case actionTypes.ADD_INGREDIENT:
            return addIngredient(state, action);
        case actionTypes.REMOVE_INGREDIENT:
            return removeIngredient(state, action);
        case actionTypes.INIT_FAIL:
            return updateObject(state, { error: action.payload, loading: false });
        case actionTypes.SHOW_BURGERBUILDER_LOADING:
            return updateObject(state, { loading: true });
        case actionTypes.CHECK_BUILDING:
            return updateObject(state, { building: true });
        default:
            return state;
    }
};

export default reducer;
