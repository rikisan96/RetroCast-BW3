import { iGameList } from "./i-game-list"

export interface iUser {
  email: string
  password: string
  region: string
  "game-list": iGameList[]
}
