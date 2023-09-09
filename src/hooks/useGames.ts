import { Platform } from '../components/PlatformIconList';
import useData from './useData';

export interface Game {
  id: number;
  name: string;
  background_image: string;
  parent_platforms: { platform: Platform }[];
  metacritic: number;
}

const useGames = () => useData<Game>('/games');

export default useGames;
