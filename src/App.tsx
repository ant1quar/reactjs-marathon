import React from 'react';
import cn from 'classnames';
import s from './App.module.scss';
import Footer from './components/footer';
import Header from './components/header';

const App = () => {
  return (
    <>
      <Header />
      <div className={cn(s.main)}>This is div!</div>
      <Footer />
    </>
  );
};
export default App;
