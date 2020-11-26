export interface Route {
  link: string;
  title: string;
  component: () => JSX.Element;
}

export interface AppRoutes {
  [key: string]: () => JSX.Element;
}

export enum RoutuesList {
  HOME = '/',
  POKEDEX = '/pokedex',
  DOCUMENTATION = '/documentation',
  LEGENDARIES = '/legendaries',
}
export interface QueryParams {
  name?: string;
}
