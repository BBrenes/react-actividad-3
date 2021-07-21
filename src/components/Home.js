import React, {useState} from 'react';
import Header from './Header';
import PostModal from './PostModal';
import FilterTabs from './FilterTabs';
import PostList from './PostList';

function Home() {

    const [filter, setFilter] = useState('All')

    const handleChangeFilter = (category) => {
        setFilter(category)
    }

  return (
    <>
      <Header />
      <PostModal />
      <FilterTabs changeFilter={handleChangeFilter}/>
      {filter}
      <PostList />
    </>
  );
}

export default Home;
