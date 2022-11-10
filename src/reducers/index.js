import todoReducers from "./todoReducers";
import { combineReducers } from "redux";

const rootReducer = combineReducers({
    todoReducers // burada reducer ı combine ediyoruz ve index.js de combine ediyoruz
})

export  default rootReducer;
// burada reducerları birleştiriyoruz ve export ediyoruz