import { BrowserRouter } from 'react-router-dom';
import './App.css';
import PortfolioApp from './components/app/PortfolioApp';
import { LanguageProvider } from './contexts/LanguageContext';

function App() {

  return (
    <div className="App">
      <BrowserRouter >
        <LanguageProvider>
          <div id="app-container" className="fade-container">
            <PortfolioApp />
          </div>
        </LanguageProvider>
      </BrowserRouter>
    </div>
  );
}

export default App;
