import { ADD_POST, EDIT_POST, DELETE_POST, ADD_COMMENT } from "./postTypes";

const INITIAL_STATE = []

const reducer = (state = INITIAL_STATE, action) => {
    switch(action.type){
        case ADD_POST:
            return [...state, action.payload]
        default:
            return state
    }
}



export default reducer