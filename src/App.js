import './App.css';
import { ThemeContext, theme } from './components/ThemeContext';
import Header from './components/Header';

function App() {
  return (
    <ThemeContext.Provider value= { theme }> 
      <Header />
    </ThemeContext.Provider>
    
  );
}

export default App;
