import React from 'react';
import Homepage from './pages/home';
import Pokedex from './pages/pokedex';
import NotFound from './pages/404';
import { AppRoutes, Route, RoutuesList } from './models/route';

export const GLOBAL_ROUTES: Route[] = [
  { title: 'Home', link: RoutuesList.HOME, component: () => <Homepage /> },
  { title: 'Pokédex', link: RoutuesList.POKEDEX, component: () => <Pokedex /> },
  { title: 'Legendaries', link: RoutuesList.LEGENDARIES, component: () => <NotFound title="legendaries" /> },
  { title: 'Documentation', link: RoutuesList.DOCUMENTATION, component: () => <NotFound title="documentation" /> },
];
export const getRoutesObject = (): AppRoutes =>
  GLOBAL_ROUTES.reduce(
    (app: AppRoutes, { link, component }) => ({
      ...app,
      [link]: component,
    }),
    {},
  );
