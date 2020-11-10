import React from 'react';
import Homepage from './pages/home';
import Pokedex from './pages/pokedex';
import NotFound from './pages/404';
import { AppRoutes, Route } from './models/route';

export const GLOBAL_ROUTES: Route[] = [
  { title: 'Home', link: '/', component: () => <Homepage /> },
  { title: 'Pokédex', link: '/pokedex', component: () => <Pokedex /> },
  { title: 'Legendaries', link: '/legendaries', component: () => <NotFound title="legendaries" /> },
  { title: 'Documentation', link: '/documentation', component: () => <NotFound title="documentation" /> },
];
export const getRoutesObject = (): AppRoutes =>
  GLOBAL_ROUTES.reduce(
    (app: AppRoutes, { link, component }) => ({
      ...app,
      [link]: component,
    }),
    {},
  );
