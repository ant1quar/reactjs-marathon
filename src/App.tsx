import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import Footer from './components/footer';
import Header from './components/header';
import Homepage from './pages/home';
import Pokedex from './pages/pokedex';

import s from './App.module.scss';
import Layout from './pages/layout';

const App = () => {
  return (
    <BrowserRouter>
      <main className={s.main}>
        <Header />
        <Layout>
          <Route path="/" exact component={Homepage} />
          <Route path="/pokedex" component={Pokedex} />
        </Layout>
        <Footer />
      </main>
    </BrowserRouter>
  );
};
export default App;
