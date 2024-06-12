import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { AuthService } from '../auth/auth.service';
import { iUser } from '../Models/i-user';
import { iGameList } from '../Models/i-game-list';
import { BehaviorSubject, Observable, map, tap, throwError } from 'rxjs';
import { ICartItem } from '../Models/i-cart-item';
import { Iboughtgames } from '../Models/iboughtgames';

@Injectable({
  providedIn: 'root',
})
export class CartService {
  private cartUrl = 'http://localhost:3000/cart';
  private boughtGamesUrl = 'http://localhost:3000/boughtGames';
  user!: iUser;

  cartLength$: BehaviorSubject<number> = new BehaviorSubject<number>(0);

  constructor(private http: HttpClient, private authSvc: AuthService) {
    this.authSvc.user$.subscribe((user) => {
      if (user) {
        this.user = user;
        this.updateCartLength();
      }
    });
  }

  getCartGames(userId: number): Observable<ICartItem[]> {
    return this.http.get<ICartItem[]>(`${this.cartUrl}?userId=${userId}`);
  }

  addToCart(game: iGameList): Observable<any> {
    if (this.user) {
      const requestBody = {
        userId: this.user.id,
        game: game,
      };

      return new Observable<any>((observer) => {
        this.getCartGames(this.user.id).subscribe(cartItems => {
          const existingItem = cartItems.find(item => item.game.id === game.id);
          if (existingItem) {
            observer.error('Game already in cart');
            return;
          }

          this.getPurchasedGames(this.user.id).subscribe(purchasedGames => {
            const alreadyPurchased = purchasedGames.some(bg => bg.cartItems.some(item => item.game.id === game.id));
            if (alreadyPurchased) {
              observer.error('Game already purchased');
              return;
            }

            this.http.post<iGameList>(this.cartUrl, requestBody).pipe(
              tap(() => {
                this.cartLength$.next(this.cartLength$.value + 1);
                console.log('Cart length:', this.cartLength$.value);
              })
            ).subscribe({
              next: (data) => {
                observer.next(data);
                observer.complete();
              },
              error: (err) => {
                observer.error(err);
              }
            });
          });
        });
      });
    } else {
      return throwError(() => new Error('User not authenticated'));
    }
  }

  removeFromCart(cartItemId: number): Observable<void> {
    return this.http.delete<void>(`${this.cartUrl}/${cartItemId}`).pipe(
      tap(() => {
        this.cartLength$.next(this.cartLength$.value - 1);
      })
    );
  }

  getCartGamesLength(): Observable<number> {
    if (this.user) {
      return this.http.get<ICartItem[]>(`${this.cartUrl}?userId=${this.user.id}`).pipe(
        tap((cart) => console.log("Contenuto dell'array cart:", cart)),
        map((cart: ICartItem[]) => cart.length)
      );
    } else {
      return throwError(() => new Error('User not authenticated'));
    }
  }

  private updateCartLength() {
    if (this.user) {
      this.getCartGamesLength().subscribe((length) => {
        this.cartLength$.next(length);
      });
    }
  }

  getPurchasedGames(userId: number): Observable<Iboughtgames[]> {
    return this.http.get<Iboughtgames[]>(`${this.boughtGamesUrl}?userId=${userId}`);
  }

  purchaseGames(): Observable<void> {
    if (!this.user) {
      return throwError(() => new Error('User not authenticated'));
    }

    return new Observable<void>((observer) => {
      this.getCartGames(this.user.id).subscribe(cartItems => {
        if (cartItems.length === 0) {
          observer.error('No games in cart');
          return;
        }

        this.http.get<Iboughtgames[]>(`${this.boughtGamesUrl}?userId=${this.user.id}`).subscribe(boughtGames => {
          let userBoughtGames = boughtGames.find(bg => bg.userId === this.user.id);

          if (!userBoughtGames) {
            userBoughtGames = { userId: this.user.id, cartItems: [], id: Date.now() };
          }

          cartItems.forEach(cartItem => {
            const existingBoughtItem = userBoughtGames!.cartItems.find(boughtItem => boughtItem.game.id === cartItem.game.id);
            if (!existingBoughtItem) {
              userBoughtGames!.cartItems.push(cartItem);
            } else {
              console.error(`Game "${cartItem.game.Title}" is already purchased.`);
            }
          });

          if (userBoughtGames!.id === Date.now()) {
            this.http.post(this.boughtGamesUrl, userBoughtGames).subscribe(() => {
              this.clearCart(this.user.id).subscribe(() => {
                observer.next();
                observer.complete();
              });
            });
          } else {
            this.http.put(`${this.boughtGamesUrl}/${userBoughtGames.id}`, userBoughtGames).subscribe(() => {
              this.clearCart(this.user.id).subscribe(() => {
                observer.next();
                observer.complete();
              });
            });
          }
        });
      });
    });
  }

  private clearCart(userId: number): Observable<void> {
    return new Observable<void>((observer) => {
      this.getCartGames(userId).subscribe(cartItems => {
        let deletedCount = 0;

        if (cartItems.length === 0) {
          observer.next();
          observer.complete();
          return;
        }

        cartItems.forEach(item => {
          this.http.delete(`${this.cartUrl}/${item.id}`).subscribe(() => {
            deletedCount++;
            if (deletedCount === cartItems.length) {
              this.cartLength$.next(0);
              observer.next();
              observer.complete();
            }
          });
        });
      });
    });
  }
}
