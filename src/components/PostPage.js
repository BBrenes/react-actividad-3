import React, {useState, useEffect} from 'react';
import { useParams } from "react-router";
import Header from './Header';
import PostInformation from './PostInformation';

function PostPage({ theme, postList }) {

    const { postId } = useParams();
    const postFound = postList.find(post => post.id === postId);
    const [postPage, setPostPage] = useState(postFound)

    useEffect(() => {
        const postFound = postList.find(post => post.id === postId);
        setPostPage(postFound)
    }, [postList, postId])

    const [postExample, setPostExample] = useState(
      {
          id: 1,
          title: 'Reprehenderit Lorem aliquip.',
          description: 'Ut elit consequat ullamco Lorem duis. Ea est cupidatat ullamco nostrud velit deserunt Lorem occaecat dolor veniam culpa quis. Laborum commodo consequat in adipisicing ea sint. Qui cupidatat Lorem ex in elit. Eiusmod incididunt occaecat commodo eiusmod anim irure velit dolore. Ea est cupidatat ullamco nostrud velit deserunt Lorem occaecat dolor veniam culpa quis. Laborum commodo consequat in adipisicing ea sint. Qui cupidatat Lorem ex in elit. Eiusmod incididunt occaecat commodo eiusmod anim irure velit dolore.' ,
          category: 'Travel',
          imageURL: 'https://source.unsplash.com/random',
          comments: [
              'Laborum commodo consequat in adipisicing ea sint. Qui cupidatat Lorem ex in elit. Eiusmod incididunt occaecat commodo eiusmod anim irure velit dolore. Ea est cupidatat ullamco nostrud velit deserunt Lorem occaecat dolor veniam culpa quis. Qui cupidatat Lorem ex in elit. ', 
              'Ea est cupidatat ullamco nostrud velit deserunt Lorem occaecat dolor veniam culpa quis. Qui cupidatat Lorem ex in elit. Eiusmod incididunt occaecat commodo eiusmod anim irure velit dolore. Ea est cupidatat ullamco nostrud velit deserunt Lorem veniam culpa quis. ',
              'Ea est cupidatat ullamco nostrud velit deserunt Lorem occaecat dolor veniam culpa quis. Laborum commodo consequat in adipisicing ea sint. Qui cupidatat Lorem ex in elit. Eiusmod incididunt occaecat commodo eiusmod anim irure velit dolore. ',
        ]
      })

  return (
    <>
        <Header theme={theme} />
        <PostInformation post={postPage} />
    </>
  );
}

export default PostPage;
