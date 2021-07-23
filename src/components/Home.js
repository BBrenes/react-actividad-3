import React, {useState} from 'react';
import Header from './Header';
import PostModal from './PostModal';
import FilterTabs from './FilterTabs';
import PostList from './PostList';

function Home({ theme, postList }) {
  
    const [filter, setFilter] = useState('All')

    const handleChangeFilter = (category) => {
        setFilter(category)
    }

    const [postListExample, setPostListExample] = useState([
      {
          id: 1,
          title: 'Reprehenderit Lorem aliquip.',
          description: 'Ut elit consequat ullamco Lorem duis. Ea est cupidatat ullamco nostrud velit deserunt Lorem occaecat dolor veniam culpa quis. Laborum commodo consequat in adipisicing ea sint. Qui cupidatat Lorem ex in elit. Eiusmod incididunt occaecat commodo eiusmod anim irure velit dolore.' ,
          category: 'Travel',
          imageURL: 'https://source.unsplash.com/random'
      },
      {
          id: 2,
          title: 'Pariatur in qui sint.',
          description: 'Ipsum velit nisi tempor in voluptate laboris. Amet consectetur aute ullamco consectetur deserunt do est non laboris. Id ullamco esse quis laborum labore irure occaecat nisi exercitation mollit anim non sint amet. Proident dolor ex occaecat non enim nisi cillum et. Qui culpa excepteur laboris deserunt. Id aliquip et anim quis sunt ullamco do aute ipsum ex voluptate. Sint veniam amet incididunt elit cupidatat adipisicing.',
          category: 'Lifestyle',
          imageURL: 'https://source.unsplash.com/random'
      },
      {
          id: 3,
          title: 'Ex veniam nisi fugiat sit.',
          description: 'Aute ipsum reprehenderit labore minim minim voluptate est sunt id consectetur mollit eu culpa ea. Non do pariatur tempor est. Ea sunt duis sint elit nulla ex sit ex aute dolor anim elit deserunt deserunt. Magna et nostrud qui nisi minim ea incididunt in labore minim id minim esse exercitation. Tempor nostrud eu labore cillum deserunt. Ut ad veniam eiusmod minim in amet quis non sit labore velit in in.',
          category: 'Business',
          imageURL: 'https://source.unsplash.com/random'
      },
      {
          id: 4,
          title: 'Excepteur Lorem laborum.',
          description:'Pariatur sunt est id proident. Ipsum veniam magna eiusmod eu consectetur anim irure cillum quis nostrud. Reprehenderit reprehenderit occaecat dolor consequat consequat sint aliqua ad. Qui veniam eiusmod ad qui duis anim ullamco.',
          category: 'Food',
          imageURL: 'https://source.unsplash.com/random'
      }
  ])

  return (
    <>
      <Header theme={theme} />
      <PostModal theme={theme} modalMode='create'/>
      <FilterTabs theme={theme} changeFilter={handleChangeFilter}/>
      <PostList theme={theme} postList={postList} postListExample={postListExample} filter={filter}/>
    </>
  );
}

export default Home;
