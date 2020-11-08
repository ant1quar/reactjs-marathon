import React from 'react';
import cn from 'classnames';
import s from './App.module.scss';
import Footer from './components/footer';
import Header from './components/header';
import Button from './components/button';

const App = () => {
  return (
    <main className={s.main}>
      <Header />
      <div className={cn('wrapper', s.mainWrapper)}>
        <Button onClick={() => {}} type="allow" disabled>
          TEST BUTTON
        </Button>
      </div>
      <Footer />
    </main>
  );
};
export default App;
