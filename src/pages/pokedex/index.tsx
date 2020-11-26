import React, { ChangeEvent, useState } from 'react';
import PokemonCard from './common/pokemon';
import s from './style.module.scss';
import Heading from '../../components/heading';
import Filters from './common/filters';
import useData from '../../hooks/getData';
import useDebounce from '../../hooks/useDebounce';
import { Pokemon, PokemonsData } from '../../models/pokemon';
import { QueryParams } from '../../models/route';

const Pokedex = () => {
  const [search, setSearch] = useState<string>('');
  const [query, setQuery] = useState<QueryParams>({});
  const debouncedSearch = useDebounce(search, 300);
  const { data, loading } = useData<PokemonsData>('getPokemons', query, [debouncedSearch]);

  const handleSearchChange = (event: ChangeEvent<HTMLInputElement>) => {
    setSearch(event.target.value);
    setQuery((s) => ({
      ...s,
      name: event.target.value,
    }));
  };
  return (
    <div className={s.root}>
      <Heading size="h2" align="center">
        {!loading && data?.total} <strong>Pokemons</strong> for you to choose your favorite
      </Heading>
      <Filters search={search} handleSearchChange={handleSearchChange} />
      <div className={s.desk}>
        {!loading && data?.pokemons?.map((p: Pokemon) => <PokemonCard key={p.id} pokemon={p} />)}
      </div>
    </div>
  );
};
export default Pokedex;
