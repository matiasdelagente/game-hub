import { SimpleGrid, Text } from '@chakra-ui/react';
import useGames from '../hooks/useGames';
import GameCard from './GameCard';
import GameCardSkeleton from './GameCardSkeleton';
import GameCardContainer from './GameCardContainer';
import { Genre } from '../hooks/useGenres';

const GamesGrid = ({ selectedGenre }: { selectedGenre: Genre | null }) => {
  const { data, error, isLoading } = useGames(selectedGenre);
  const skeletons = [1, 2, , 3, 4, 6];

  return (
    <>
      {error && <Text>{error}</Text>}
      <ul>
        <SimpleGrid
          columns={{ sm: 2, md: 2, lg: 3, xl: 5 }}
          spacing={3}
          padding="10px"
        >
          {isLoading &&
            skeletons.map((skeleton) => (
              <GameCardContainer key={skeleton}>
                <GameCardSkeleton />
              </GameCardContainer>
            ))}
          {data.map((game) => (
            <GameCardContainer key={game.id}>
              <GameCard game={game} />
            </GameCardContainer>
          ))}
        </SimpleGrid>
      </ul>
    </>
  );
};

export default GamesGrid;
