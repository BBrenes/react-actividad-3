import './App.css';
import ThemeContext, { theme } from './components/ThemeContext';
import { connect } from 'react-redux';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from 'react-router-dom'
import 'fontsource-roboto';
import Home from './components/Home';
import PostPage from './components/PostPage';

type State = Post[];

interface Post {
    id: string;
    title: string;
    description: string;
    category: string;
    imageURL: string;
    comments: Array<string>;
}

interface RootState {
  post: State
}

function mapStateToProps(state: RootState) {
  return {
    postData : state.post
  }
}

const App: React.FC<{postData: State}> = ({postData}) => {

  return (
      <ThemeContext.Provider value= { theme }>
        <Router>
          <Switch>
            <Route path="/" exact>
              <Home postList={postData}/>
            </Route>
            <Route path="/post/:postId">
              <PostPage postList={postData}/>
            </Route>
          </Switch>
        </Router> 
      </ThemeContext.Provider>   
  );
}

export default connect(mapStateToProps)(App)
