import React, { useContext } from 'react';
import{Routes , Route } from 'react-router-dom';
import Home from './pages/home';
import BuyCredit from './pages/buycredit';
import Result from './pages/result';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Login from './components/Login';
import NotFound from './components/NotFound';
import { AppContext } from './context/AppContext';

const App = () => {
  const { showLogin } = useContext(AppContext);

  return (
    <div className='px-4 sm:px-20 md:px-32 lg:px-44 xl:px-52 2xl:px-60
    min-h-screen
    bg-gradient-to-b from-teal-50 to-orange-50
    '>
      <Navbar />
      {showLogin && <Login />}
      <Routes>
        <Route path='/' element={ <Home/> } />
        <Route path='/buycredit' element={ <BuyCredit/> } />
        <Route path='/result' element={ <Result/> } />
        <Route path='*' element={ <NotFound/> } />
      </Routes>
      <Footer/>

    </div>
  );
};

export default App;
