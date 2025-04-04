import taskReducer from "./taskReducer"
import { combineReducers } from "@reduxjs/toolkit"


const rootReducer = combineReducers({
    tasks: taskReducer,
})

export default rootReducer;