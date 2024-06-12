import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { AuthService } from '../auth/auth.service';
import { iUser } from '../Models/i-user';
import { iGameList } from '../Models/i-game-list';
import { BehaviorSubject, Observable, map, tap, throwError } from 'rxjs';
import { ICartItem } from '../Models/i-cart-item';

@Injectable({
  providedIn: 'root',
})
export class CartService {
  cartUrl = 'http://localhost:3000/cart';
  user!: iUser;
  cartGames: ICartItem[] = [];

  cartLength$: BehaviorSubject<number> = new BehaviorSubject<number>(0);

  constructor(private http: HttpClient, private authSvc: AuthService) {
    this.authSvc.user$.subscribe((user) => {
      if (user) {
        this.user = user;
      }
    });
  }

  getCartGames(userId: number) {
    return this.http.get<ICartItem[]>(`${this.cartUrl}?userId=${userId}`);
  }

  addToCart(game: iGameList) {
    if (this.user) {
      const requestBody = {
        userId: this.user.id,
        game: game,
      };
      return this.http.post<iGameList>(this.cartUrl, requestBody).pipe(
        tap(() => {
          this.cartLength$.next(this.cartLength$.value + 1);
          console.log('Cart length:', this.cartLength$.value);
        })
      );
    } else {
      return throwError(() => new Error('User not authenticated'));
    }
  }

  getCartGamesLength(): Observable<number> {
    if (this.user) {
      return this.http.get<any>(`${this.cartUrl}/${this.user.id}`).pipe(
        tap((cart) => console.log("Contenuto dell'array cart:", cart)),
        map((cart: Partial<iGameList[]>) => cart.length)
      );
    } else {
      return throwError(() => new Error('User not authenticated'));
    }
  }

  loadCartGames() {
    if (this.user) {
      this.getCartGames(this.user.id).subscribe((games: ICartItem[]) => {
        this.cartGames = games;
        console.log(this.cartGames);
        const cartLength = this.cartGames.length;
        this.cartLength$.next(cartLength);
      });
    }
  }

  deleteGame(cartItemId: number) {
    return this.http.delete(`${this.cartUrl}/${cartItemId}`).pipe(
      tap(() => {
        this.cartGames = this.cartGames.filter(
          (cart) => cart.id !== cartItemId
        );
        this.cartLength$.next(this.cartGames.length);
        console.log('Updated cartGames:', this.cartGames);
      })
    );
  }
}
