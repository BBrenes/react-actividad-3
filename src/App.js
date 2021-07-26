import './App.css';
import ThemeContext, { theme } from './components/ThemeContext';
import { connect } from 'react-redux';
import 'fontsource-roboto';
import Home from './components/Home';
import PostPage from './components/PostPage';

function mapStateToProps(state) {
  return {
    postData : state.post
  }
}

function App({postData}) {

  return (
      <ThemeContext.Provider value= { theme }> 
        <Home theme={theme} postList={postData}/>
        {/* <PostPage theme={theme} postList={postData}/> */}
      </ThemeContext.Provider>   
  );
}

export default connect(mapStateToProps)(App)
