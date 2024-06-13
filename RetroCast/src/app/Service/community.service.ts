import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { iUser } from '../Models/i-user';

@Injectable({
  providedIn: 'root'
})
export class CommunityService {
  private baseUrl: string = 'http://localhost:3000';
  private usersUrl: string = `${this.baseUrl}/users`; // URL per ottenere gli utenti

  constructor(private http: HttpClient) { }

  getUsers(): Observable<iUser[]> {
    return this.http.get<iUser[]>(this.usersUrl); // Ottiene la lista di utenti
  }
}
