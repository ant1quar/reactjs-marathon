export interface Route {
  link: string;
  title: string;
  component: () => JSX.Element;
}

export interface AppRoutes {
  [key: string]: () => JSX.Element;
}
