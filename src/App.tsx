import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import Footer from './components/footer';
import Header from './components/header';
import Homepage from './pages/home';
import Pokedex from './pages/pokedex';
import NotFound from './pages/404';

import s from './App.module.scss';

const App = () => {
  return (
    <BrowserRouter>
      <main className={s.main}>
        <Header />
        <Route path="/" exact component={Homepage} />
        <Route path="/pokedex" component={Pokedex} />
        <Route path="*" component={NotFound} />
        <Footer />
      </main>
    </BrowserRouter>
  );
};
export default App;
