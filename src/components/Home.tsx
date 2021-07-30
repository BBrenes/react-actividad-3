import React, { useState} from 'react';
import Header from './Header';
import PostModal from './PostModal';
import FilterTabs from './FilterTabs';
import PostList from './PostList';
import { State } from '../models/Post'

const Home: React.FC<{postList: State}> = ({ postList }) => {
  
    const [filter, setFilter] = useState<string>('All')

    const handleChangeFilter = (category: string):void => {
        setFilter(category)
    }

  return (
    <>
      <Header />
      <PostModal modalMode='create'/>
      <FilterTabs changeFilter={handleChangeFilter}/>
      <PostList postList={postList} filter={filter}/>
    </>
  );
}

export default Home;
