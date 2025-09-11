import React from 'react';
import{Routes , Route } from 'react-router-dom';
import Home from './pages/home';
import BuyCredit from './pages/buycredit';
import Result from './pages/result';
import Navbar from './components/Navbar';
import Footer from './components/Footer';

const App = () => {
  return (
    <div className='px-4 sm:px-20 md:px-32 lg:px-44 xl:px-52 2xl:px-60
    min-h-screen
    bg-gradient-to-b from-teal-50 to-orange-50
    '>
      <Navbar />
      <Routes>
        <Route path='/' element={ <Home/> } />
        <Route path='/buycredit' element={ <BuyCredit/> } />
        <Route path='/result' element={ <Result/> } />
      </Routes>
      <Footer/>
      
    </div>
  );
};

export default App;
