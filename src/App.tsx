import './App.css';
import { BrowserRouter, Link } from 'react-router-dom';
import { Router } from './router/router';
import { PrimaryButton } from './components/atoms/button/PrimaryButton';

function App() {
  return (
    <BrowserRouter>
      <div className='App'>
        <PrimaryButton>
          test
        </PrimaryButton>
      </div>
      <Router />
    </BrowserRouter>
  );
}

export default App;
