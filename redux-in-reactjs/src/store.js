import { createStore } from "redux"
import rootReducer from "./reducers";

//Luu tru du lieu tu redux
const store = createStore(rootReducer);

export default store