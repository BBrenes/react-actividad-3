import React, {useState} from 'react';
import Header from './Header';
import PostInformation from './PostInformation';

function PostPage({ theme, postList }) {

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
        <PostInformation post={postExample} />
    </>
  );
}

export default PostPage;
