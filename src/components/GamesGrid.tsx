import { SimpleGrid, Text } from '@chakra-ui/react';
import useGames from '../hooks/useGames';
import GameCard from './GameCard';

const GamesGrid = () => {
  const { games, error } = useGames();

  return (
    <>
      {error && <Text>{error}</Text>}
      <ul>
        <SimpleGrid
          columns={{ sm: 2, md: 2, lg: 3, xl: 5 }}
          spacing={10}
          padding="10px"
        >
          {games.map((game) => (
            <GameCard game={game} />
          ))}
        </SimpleGrid>
      </ul>
    </>
  );
};

export default GamesGrid;
