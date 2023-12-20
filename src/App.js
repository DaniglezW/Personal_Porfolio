import { BrowserRouter } from 'react-router-dom';
import './App.css';
import PortfolioApp from './components/app/PortfolioApp';

function App() {
  return (
    <div className="App">
      <BrowserRouter >
        <PortfolioApp />
      </BrowserRouter>
    </div>
  );
}

export default App;
