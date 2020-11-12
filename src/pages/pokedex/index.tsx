import React from 'react';
import PokemonCard from './common/pokemon';
import s from './style.module.scss';
import Heading from '../../components/heading';
import Filters from './common/filters';
import usePokemons from '../../hooks/pokemons';

const Pokedex = () => {
  const { pokemons, total, loading } = usePokemons();
  return (
    <div className={s.root}>
      {loading ? (
        <Heading size="h2" align="center">
          Loading...
        </Heading>
      ) : (
        <>
          <Heading size="h2" align="center">
            {total} <strong>Pokemons</strong> for you to choose your favorite
          </Heading>
          <Filters />
          <div className={s.desk}>
            {pokemons.map((p) => (
              <PokemonCard key={p.id} pokemon={p} />
            ))}
          </div>
        </>
      )}
    </div>
  );
};
export default Pokedex;
