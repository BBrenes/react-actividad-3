import { ADD_POST, EDIT_POST, DELETE_POST, ADD_COMMENT } from "./postTypes";

type State = Post[];

type Actions = 
    { type: "ADD_POST"; payload: Post} |
    { type: "EDIT_POST"; payload: Post} |
    { type: "DELETE_POST"; payload: string} |
    { type: "ADD_COMMENT"; payload: {id: string; comment: string}};

interface Post {
    id: string;
    title: string;
    description: string;
    category: string;
    imageURL: string;
    comments: Array<string>;
}

const INITIAL_STATE: State = []

const reducer = (state: State = INITIAL_STATE, action: Actions): State => {
    switch(action.type){
        case ADD_POST:
            return [...state, action.payload]
        case EDIT_POST:
            const newStateEdited = state.map((post: Post): Post => {
                if(post.id === action.payload.id){
                    return action.payload
                }
                return post
            })
            return newStateEdited
        case DELETE_POST:
            const newStateDeleted = state.filter((post: Post): boolean => post.id !== action.payload)
            return newStateDeleted
        case ADD_COMMENT:
            const newStateComment = state.map((post: Post): Post => {
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