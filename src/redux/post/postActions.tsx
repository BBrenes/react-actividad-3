import { ADD_POST, EDIT_POST, DELETE_POST, ADD_COMMENT } from "./postTypes";

interface Post {
    id: string;
    title: string;
    description: string;
    category: string;
    imageURL: string;
    comments: Array<string>;
}

export const addPost = (post: Post) => {
    return {
        type: ADD_POST,
        payload: post
    }
}

export const editPost = (post: Post) => {
    return {
        type: EDIT_POST,
        payload: post
    }
}

export const deletePost = (postId: string) => {
    return {
        type: DELETE_POST,
        payload: postId
    }
}

export const addComment = (commentInfo: {comment:string, id:string}) => {
    return {
        type: ADD_COMMENT,
        payload: commentInfo
    }
}