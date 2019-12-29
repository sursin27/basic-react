import { ADD_ARTICLE,SUB_ARTICLE } from "../constants/action-types";
console.log("reducers")
// Reducer to add article
export const articleReducer = (state = [], action) => {
    
    switch (action.type) {
        case ADD_ARTICLE:
            return [...state, action.payload];
        case SUB_ARTICLE:
            return [...state, action.payload];
        default:
            return state;
    }
}

//export default articleReducer;