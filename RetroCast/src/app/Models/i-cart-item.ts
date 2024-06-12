import { iGameList } from './i-game-list';

export interface ICartItem {
  id: number;
  userId: number;
  game: iGameList;
}
