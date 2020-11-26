import Config from '../models/config';

export const config: Config = {
  client: {
    server: {
      protocol: 'http',
      host: 'zar.hosthot.ru',
    },
    endpoint: {
      getPokemons: {
        method: 'GET',
        uri: {
          pathname: `/api/v1/pokemons`,
        },
      },
    },
  },
};
export default config;
