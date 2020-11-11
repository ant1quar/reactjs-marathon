import React from 'react';
import { useRoutes } from 'hookrouter';
import Footer from './components/footer';
import Header from './components/header';

import s from './App.module.scss';
import Layout from './pages/layout';
import { getRoutesObject } from './routes';
import { AppRoutes } from './models/route';
import NotFound from './pages/404';

const routes: AppRoutes = getRoutesObject();
const App = () => {
  const match = useRoutes(routes);
  return (
    <main className={s.main}>
      <Header />
      <Layout>{match || <NotFound />}</Layout>
      <Footer />
    </main>
  );
};
export default App;
