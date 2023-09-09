import { SimpleGrid, Text } from '@chakra-ui/react';
import useGames from '../hooks/useGames';
import GameCard from './GameCard';
import GameCardSkeleton from './GameCardSkeleton';

const GamesGrid = () => {
  const { games, error, isLoading } = useGames();
  const skeletons = [1, 2, , 3, 4, 6];

  return (
    <>
      {error && <Text>{error}</Text>}
      <ul>
        <SimpleGrid
          columns={{ sm: 2, md: 2, lg: 3, xl: 5 }}
          spacing={10}
          padding="10px"
        >
          {isLoading &&
            skeletons.map((skeleton) => <GameCardSkeleton key={skeleton} />)}
          {games.map((game) => (
            <GameCard game={game} />
          ))}
        </SimpleGrid>
      </ul>
    </>
  );
};

export default GamesGrid;
