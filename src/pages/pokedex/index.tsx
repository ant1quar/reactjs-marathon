import React from 'react';
import PokemonCard from './common/pokemon';
import s from './style.module.scss';
import Heading from '../../components/heading';
import Filters from './common/filters';
import getPokemons from '../../mocks/pokedex';
import { Pokemon } from '../../models/pokemon';

const Pokedex = () => {
  const pokemons: Pokemon[] = getPokemons();
  return (
    <div className={s.root}>
      <Heading size="h2" align="center">
        800 <strong>Pokemons</strong> for you to choose your favorite
      </Heading>
      <Filters />
      <div className={s.desk}>
        {pokemons.map((p) => (
          <PokemonCard key={p.id} pokemon={p} />
        ))}
      </div>
    </div>
  );
};
export default Pokedex;
