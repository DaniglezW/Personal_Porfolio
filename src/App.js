import { BrowserRouter } from 'react-router-dom';
import './App.css';
import PortfolioApp from './components/app/PortfolioApp';
import { LanguageProvider } from './contexts/LanguageContext';
import { Analytics } from "@vercel/analytics/react"

function App() {

  return (
    <div className="App">
      <BrowserRouter >
        <LanguageProvider>
          <div id="app-container" className="fade-container">
            <PortfolioApp />
            <Analytics />
          </div>
        </LanguageProvider>
      </BrowserRouter>
    </div>
  );
}

export default App;
