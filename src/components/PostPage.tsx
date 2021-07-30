import React, {useState, useEffect} from 'react';
import { useParams } from "react-router";
import Header from './Header';
import PostInformation from './PostInformation';
import { State, PostI } from '../models/Post'

interface Props {
  postList: State;
}

const PostPage:React.FC<Props> = ({ postList }) => {

    const { postId } = useParams<{postId?: string}>();
    const postFound = postList.find((post:PostI):boolean => post.id === postId) as PostI;
    const [postPage, setPostPage] = useState<PostI>(postFound)

    useEffect(() => {
        const postFound = postList.find((post:PostI):boolean => post.id === postId) as PostI;
        setPostPage(postFound)
    }, [postList, postId])

  return (
    <>
        <Header />
        <PostInformation post={postPage} />
    </>
  );
}

export default PostPage;
