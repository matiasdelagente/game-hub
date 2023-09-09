import { useEffect, useState } from 'react';
import client from '../services/api-client';
import { CanceledError } from 'axios';

export interface Genre {
  id: number;
  name: string;
}

interface GenresResponse {
  count: number;
  results: Genre[];
}

const useGenres = () => {
  const [genres, setGenres] = useState<Genre[]>([]);
  const [error, setError] = useState();
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    setIsLoading(true);
    const controller = new AbortController();
    client
      .get<GenresResponse>('/genres', { signal: controller.signal })
      .then((response) => {
        setGenres(response.data.results);
        setIsLoading(false);
      })
      .catch((err) => {
        if (err instanceof CanceledError) return;
        setError(err.message);
        setIsLoading(false);
      });

    return () => controller.abort();
  }, []);

  return { genres, error, isLoading };
};

export default useGenres;
