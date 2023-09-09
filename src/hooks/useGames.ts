import { useEffect, useState } from 'react';
import client from '../services/api-client';
import { CanceledError } from 'axios';
import { Platform } from '../components/PlatformIconList';

export interface Game {
  id: number;
  name: string;
  background_image: string;
  parent_platforms: { platform: Platform }[];
}

interface GamesResponse {
  count: number;
  results: Game[];
}

const useGames = () => {
  const [games, setGames] = useState<Game[]>([]);
  const [error, setError] = useState();

  useEffect(() => {
    const controller = new AbortController();
    client
      .get<GamesResponse>('/games', { signal: controller.signal })
      .then((response) => {
        setGames(response.data.results);
      })
      .catch((err) => {
        if (err instanceof CanceledError) return;
        setError(err.message);
      });

    return () => controller.abort();
  }, []);

  return { games, error };
};

export default useGames;