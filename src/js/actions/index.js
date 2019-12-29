import { ADD_ARTICLE,SUB_ARTICLE } from "../constants/action-types";
console.log("action Index")
// Action to add article to store
export const addArticle = article => ({
    type: ADD_ARTICLE,
    payload: article
});

export const subArticle = article => ({
    type: SUB_ARTICLE,
    payload: article
});

