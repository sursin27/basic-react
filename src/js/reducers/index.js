import { combineReducers } from "redux";
import {articleReducer} from "./articleReducer";
import {IncreReducer} from './reducer2'
console.log("combinereducers")
// Combine all reducers as root reducer
export default combineReducers({articles: articleReducer,IncreReducer});