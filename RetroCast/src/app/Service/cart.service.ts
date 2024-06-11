import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { AuthService } from '../auth/auth.service';
import { iUser } from '../Models/i-user';
import { iGameList } from '../Models/i-game-list';
import { throwError } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class CartService {
  cartUrl = 'http://localhost:3000/cart';
  user!: iUser;

  constructor(private http: HttpClient, private authSvc: AuthService) {
    this.authSvc.user$.subscribe((user) => {
      if (user) {
        this.user = user;
      }
    });
  }

  getCartGames(userId: number) {
    return this.http.get<iGameList[]>(`${this.cartUrl}/${userId}`);
  }

  addToCart(game: iGameList) {
    if (this.user) {
      return this.http.post<iGameList>(`${this.cartUrl}/${this.user.id}`, game);
    } else {
      return throwError(() => new Error('User not authenticated'));
    }
  }
}
