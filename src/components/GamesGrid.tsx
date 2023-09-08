import { useEffect, useState } from 'react';
import client from '../services/api-client';
import { Text } from '@chakra-ui/react';

interface Game {
  id: number;
  name: string;
}

interface GamesResponse {
  count: number;
  results: Game[];
}

const GamesGrid = () => {
  const [games, setGames] = useState<Game[]>([]);
  const [error, setError] = useState();

  useEffect(() => {
    client
      .get<GamesResponse>('/games')
      .then((response) => {
        setGames(response.data.results);
      })
      .catch((err) => setError(err.message));
  }, []);

  return (
    <>
      {error && <Text>{error}</Text>}
      <ul>
        {games.map((game) => (
          <li key={game.id}>{game.name}</li>
        ))}
      </ul>
    </>
  );
};

export default GamesGrid;
