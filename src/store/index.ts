import { createStore } from "redux";
import thunk from "redux-thunk";

export const store = createStore({}, applyMiddleWare(thunk))