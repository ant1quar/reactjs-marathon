import { PropsWithChildren } from 'react';

export interface Route {
  link: string;
  title: string;
  component: (props: PropsWithChildren<any>) => JSX.Element;
}

export interface AppRoutes {
  [key: string]: (props: PropsWithChildren<any>) => JSX.Element;
}

export enum RoutuesList {
  HOME = '/',
  POKEDEX = '/pokedex',
  DOCUMENTATION = '/documentation',
  LEGENDARIES = '/legendaries',
  POKEMON = '/pokedex/:id',
}
export interface QueryParams {
  name?: string;
}
