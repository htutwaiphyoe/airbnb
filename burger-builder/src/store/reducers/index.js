import { combineReducers } from "redux";
import burgerbuilderReducer from "./burgerbuilder";
import formReducer from "./form";
import ordersReducer from "./orders";
import authReducer from "./auth";
const rootReducer = combineReducers({
    burgerbuilder: burgerbuilderReducer,
    form: formReducer,
    orders: ordersReducer,
    auth: authReducer,
});

export default rootReducer;
