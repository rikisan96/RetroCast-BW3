import { iGameList } from './i-game-list';

export interface ICartItem {
  userId: number;
  game: iGameList;
  id: number;
  bought: boolean;
}
