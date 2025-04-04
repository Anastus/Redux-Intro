import { createStore } from "redux";
import { applyMiddleware } from "redux";
import { composeWithDevTools } from "redux-devtools-extensions";
import { thunk } from "redux-thunk";

import taskReducer from "./taskReducer"

const store = createStore(
    taskReducer,
    composeWithDevTools(applyMiddleware(thunk))
);

export default store;