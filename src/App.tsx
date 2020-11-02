import React from 'react';
import cn from 'classnames';
import s from './App.module.scss';
import Footer from './components/Footer/Footer';
import Header from './components/Header/Header';

const App = () => {
  return (
    <>
      <Header />
      <div className={cn(s.header, 'color')}>This is div!</div>
      <Footer />
    </>
  );
};
export default App;
