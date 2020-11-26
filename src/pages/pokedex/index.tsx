import React, { ChangeEvent, useState } from 'react';
import PokemonCard from './common/pokemon';
import s from './style.module.scss';
import Heading from '../../components/heading';
import Filters from './common/filters';
import useData from '../../hooks/getData';
import useDebounce from '../../hooks/useDebounce';

const Pokedex = () => {
  const [search, setSearch] = useState('');
  const [query, setQuery] = useState({});
  const debouncedSearch = useDebounce(search, 300);
  const { pokemons, total, loading } = useData('getPokemons', query, [debouncedSearch]);

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
        {!loading && total} <strong>Pokemons</strong> for you to choose your favorite
      </Heading>
      <Filters search={search} handleSearchChange={handleSearchChange} />
      <div className={s.desk}>
        {!loading && pokemons && pokemons.map((p) => <PokemonCard key={p.id} pokemon={p} />)}
      </div>
    </div>
  );
};
export default Pokedex;
