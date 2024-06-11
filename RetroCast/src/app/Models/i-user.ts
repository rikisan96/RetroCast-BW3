import { iGameList } from './i-game-list';

export interface iUser {
  email: string;
  password: string;
  region: string;
  firstName: string;
  lastName: string;
  username: string;
  age?: number;
  profileImageUrl?: string;
  'game-list': iGameList[];
  id: number;
}
