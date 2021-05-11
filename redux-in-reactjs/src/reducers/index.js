//rootReducer : Tong hop laij tat ca reducer trong app reactJs
import { combineReducers } from "redux";
import useReducer from "./user";
import hobbyReducer from "./hobby";

const rootReducer = combineReducers({
  //ham combineReducers de tong hop tat ca Reducer co trong app reactJs
  hobby: hobbyReducer,
  user: useReducer,
});

export default rootReducer;
