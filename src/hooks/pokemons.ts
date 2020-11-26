import { useEffect, useState } from 'react';
import { Pokemon } from '../models/pokemon';
import req from '../utils/request';

interface PokemonsHook {
  total: number | null;
  pokemons: Pokemon[];
  error: boolean;
  loading: boolean;
}
const usePokemons = (): PokemonsHook => {
  const [total, setTotal] = useState(null);
  const [pokemons, setPokemons] = useState([]);
  const [error, setError] = useState(false);
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    setLoading(true);
    setError(false);
    const getPokemons = async () => {
      try {
        const data = await req('getPokemons', {});
        setTotal(data.total);
        setPokemons(data.pokemons);
      } catch {
        setError(true);
      } finally {
        setLoading(false);
      }
    };
    getPokemons();
  }, []);
  return {
    total,
    pokemons,
    loading,
    error,
  };
};
export default usePokemons;