import './App.css';
import { BrowserRouter, Link } from 'react-router-dom';
import { Router } from './router/router';
import { PrimaryButton } from './components/atoms/button/PrimaryButton';
import { SecandaryButton } from './components/atoms/button/SecandaryButton';
import { SearchInput } from './components/molecules/SearchInput';

function App() {
  return (
    <BrowserRouter>
      <div className='App'>
        <PrimaryButton>
          test
        </PrimaryButton>
        <SecandaryButton>
          test
        </SecandaryButton>
        <SearchInput></SearchInput>
      </div>
      <Router />
    </BrowserRouter>
  );
}

export default App;
