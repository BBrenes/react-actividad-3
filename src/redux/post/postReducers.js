import { ADD_POST, EDIT_POST, DELETE_POST, ADD_COMMENT } from "./postTypes";

const INITIAL_STATE = []

const reducer = (state = INITIAL_STATE, action) => {
    switch(action.type){
        case ADD_POST:
            return [...state, action.payload]
        case EDIT_POST:
            const newStateEdited = state.map(post => {
                if(post.id === action.payload.id){
                    return action.payload
                }
                return post
            })
            return newStateEdited
        case DELETE_POST:
            const newStateDeleted = state.filter(post => post.id !== action.payload)
            return newStateDeleted
        case ADD_COMMENT:
            return [...state, action.payload]
        default:
            return state
    }
}



export default reducer