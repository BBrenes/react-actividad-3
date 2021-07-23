import { ADD_POST, EDIT_POST, DELETE_POST, ADD_COMMENT } from "./postTypes";

const INITIAL_STATE = []

const reducer = (state = INITIAL_STATE, action) => {
    switch(action.type){
        case ADD_POST:
            return [...state, action.payload]
        case DELETE_POST:
            const newState = state.filter(post => post.id !== action.payload)
            return newState
        default:
            return state
    }
}



export default reducer