import { createStore } from "redux";
import rootReducer from "../reducers/index";
console.log("store  create store")
// Configure store with reducers and create
const store = createStore(rootReducer);

export default store;
