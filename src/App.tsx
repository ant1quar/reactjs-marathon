import React from 'react';
import cn from 'classnames';
import s from './App.module.scss';
import Index from './components/footer';
import Index from './components/header';

const App = () => {
  return (
    <>
      <Index />
      <div className={cn(s.header, 'color')}>This is div!</div>
      <Index />
    </>
  );
};
export default App;
