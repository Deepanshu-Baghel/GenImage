import React from 'react';
import{Routes , Route } from 'react-router-dom';
import Home from './pages/home';
import BuyCredit from './pages/buycredit';
import Result from './pages/result';

const App = () => {
  return (
    <div>

      <Routes>
        <Route path='/' element={ <Home/> } />
        <Route path='/buycredit' element={ <BuyCredit/> } />
        <Route path='/result' element={ <Result/> } />
        <Home />
      <BuyCredit />
      <Result />
      </Routes>
      
    </div>
  );
};

export default App;
