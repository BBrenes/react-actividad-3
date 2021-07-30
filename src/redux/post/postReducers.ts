import { ADD_POST, EDIT_POST, DELETE_POST, ADD_COMMENT } from "./postTypes";
import { State, PostI } from '../../models/Post'

type Actions = 
    { type: "ADD_POST"; payload: PostI} |
    { type: "EDIT_POST"; payload: PostI} |
    { type: "DELETE_POST"; payload: string} |
    { type: "ADD_COMMENT"; payload: {id: string; comment: string}};

const INITIAL_STATE: State = []

const reducer = (state: State = INITIAL_STATE, action: Actions): State => {
    switch(action.type){
        case ADD_POST:
            return [...state, action.payload]
        case EDIT_POST:
            const newStateEdited = state.map((post: PostI): PostI => {
                if(post.id === action.payload.id){
                    return action.payload
                }
                return post
            })
            return newStateEdited
        case DELETE_POST:
            const newStateDeleted = state.filter((post: PostI): boolean => post.id !== action.payload)
            return newStateDeleted
        case ADD_COMMENT:
            const newStateComment = state.map((post: PostI): PostI => {
                if(post.id === action.payload.id){
                    return {...post, comments: [...post.comments, action.payload.comment]}
                }
                return post
            })
            return newStateComment
        default:
            return state
    }
}

export default reducer