import { createStore } from "redux";
import handleCart from "./reducer/handleCart";
import { combineReducers } from "redux";

const rootReducers = combineReducers({
    handleCart,
})

const store = createStore(rootReducers);

export default store;