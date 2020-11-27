import { useEffect, useState } from 'react';
import { Pokemon } from '../models/pokemon';
import req from '../utils/request';

interface PokemonsHook {
  total: number | null;
  pokemons: Pokemon[] | null;
  error: boolean;
  loading: boolean;
}
const useData = (endpoint: string, query: { [key: string]: string }, deps: any[]): PokemonsHook => {
  const [total, setTotal] = useState(null);
  const [pokemons, setPokemons] = useState(null);
  const [error, setError] = useState(false);
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    setLoading(true);
    setError(false);
    const getData = async () => {
      try {
        const data = await req(endpoint, query);
        setTotal(data.total);
        setPokemons(data.pokemons);
      } catch {
        setError(true);
      } finally {
        setLoading(false);
      }
    };
    getData();
  }, deps);
  return {
    total,
    pokemons,
    loading,
    error,
  };
};
export default useData;
