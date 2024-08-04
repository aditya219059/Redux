import { applyMiddleware, legacy_createStore } from "redux";
import reducers from "./reducer/index";
import { thunk } from "redux-thunk";



export const store = legacy_createStore(reducers, {}, applyMiddleware(thunk))