import React from 'react';
import s from './App.module.scss';
import Footer from './components/footer';
import Header from './components/header';

const App = () => {
  return (
    <main className={s.main}>
      <Header />
      <div>content</div>
      <Footer />
    </main>
  );
};
export default App;
