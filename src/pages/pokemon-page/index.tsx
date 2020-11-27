import React from 'react';
import useData from '../../hooks/getData';
import { Pokemon } from '../../models/pokemon';

export interface PokemonProps {
  id: string | number;
}

const PokemonPage: React.FC<PokemonProps> = ({ id }) => {
  const { data, loading } = useData<Pokemon>('getPokemon', { id: 30 }, []);

  if (loading) return <div>Loading...</div>;
  return <div>Pokemon {data && data.name}</div>;
};
export default PokemonPage;
