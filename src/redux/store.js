import { createStore } from "redux";
import cartReducer from "./reducer/cartReducer";
import { combineReducers } from "redux";

const rootReducers = combineReducers({
  cartReducer,
});

const store = createStore(rootReducers);

export default store;
