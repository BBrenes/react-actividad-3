import './App.css';
import { ThemeContext, theme } from './components/ThemeContext';
import 'fontsource-roboto';
import Home from './components/Home';

function App() {
  
  return (
    <ThemeContext.Provider value= { theme }> 
      <Home />
    </ThemeContext.Provider>
    
  );
}

export default App;
