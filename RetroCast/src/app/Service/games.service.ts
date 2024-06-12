import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { iGameList } from '../Models/i-game-list';

@Injectable({
  providedIn: 'root',
})
export class GamesService {
  private apiUrl: string = 'http://localhost:3000/games';

  constructor(private http: HttpClient) {}

  getAllGames(): Observable<iGameList[]> {
    return this.http.get<iGameList[]>(this.apiUrl);
  }
}
