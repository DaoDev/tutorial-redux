//rootReducer : Tong hop laij tat ca reducer trong app reactJs
import { combineReducers } from "redux"
import useReducer from "./user"
import hobbReducer from "./hobby"

const rootReducer = combineReducers({ //ham combineReducers de tong hop tat ca Reducer co trong app reactJs
    hobby: hobbReducer,
    user: useReducer
})

export default rootReducer