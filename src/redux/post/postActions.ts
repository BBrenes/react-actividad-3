import { ADD_POST, EDIT_POST, DELETE_POST, ADD_COMMENT } from "./postTypes";
import { PostI } from '../../models/Post'

interface ActionReturn {
    type: string;
    payload: PostI | string | {};
}

export const addPost = (post: PostI):ActionReturn => {
    return {
        type: ADD_POST,
        payload: post
    }
}

export const editPost = (post: PostI):ActionReturn => {
    return {
        type: EDIT_POST,
        payload: post
    }
}

export const deletePost = (postId: string):ActionReturn => {
    return {
        type: DELETE_POST,
        payload: postId
    }
}

export const addComment = (commentInfo: {comment:string, id:string}):ActionReturn => {
    return {
        type: ADD_COMMENT,
        payload: commentInfo
    }
}