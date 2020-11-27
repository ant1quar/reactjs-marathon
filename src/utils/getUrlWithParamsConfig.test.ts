import getUrlWithParamsConfig from './getUrlWithParamsConfig';

describe('getUrlWithParamsConfig', () => {
  test('Должна принимать два аргумента endpoint и пустой объект параметров и возвращать объект-сктруктуру url', () => {
    const url = getUrlWithParamsConfig('getPokemons', {});
    expect(url).toEqual({
      protocol: 'http',
      host: 'zar.hosthot.ru',
      pathname: `/api/v1/pokemons`,
      query: {},
    });
  });
  test("Должна принимать два аргумента endpoint и объект параметров {name: 'Pikachu'} с именем и возвращать объект-сктруктуру структуру url", () => {
    const url = getUrlWithParamsConfig('getPokemons', { name: 'Pikachu' });
    expect(url).toEqual({
      protocol: 'http',
      host: 'zar.hosthot.ru',
      pathname: `/api/v1/pokemons`,
      query: { name: 'Pikachu' },
    });
  });
  test('Должна принимать два аргумента endpoint и объект параметров {id: 25} с именем и возвращать объект-сктруктуру структуру url', () => {
    const url = getUrlWithParamsConfig('getPokemon', { id: 25 });
    expect(url).toEqual({
      protocol: 'http',
      host: 'zar.hosthot.ru',
      pathname: `/api/v1/pokemons/25`,
      query: {},
    });
  });
});
