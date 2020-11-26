import { useEffect, useState } from 'react';
import req from '../utils/request';
import { QueryParams } from '../models/route';

const useData = <T>(endpoint: string, query: QueryParams, deps: any[]) => {
  const [data, setData] = useState<T | null>(null);
  const [error, setError] = useState<boolean>(false);
  const [loading, setLoading] = useState<boolean>(true);
  useEffect(() => {
    setLoading(true);
    setError(false);
    const getData = async (): Promise<void> => {
      try {
        const data = await req<T>(endpoint, query);
        setData(data);
      } catch {
        setError(true);
      } finally {
        setLoading(false);
      }
    };
    getData();
  }, deps);
  return {
    data,
    loading,
    error,
  };
};
export default useData;
