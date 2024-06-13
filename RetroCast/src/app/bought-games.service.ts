import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { ICartItem } from './Models/i-cart-item';
import { BehaviorSubject, Observable } from 'rxjs';
import { iGameList } from './Models/i-game-list';
import { Iboughtgames } from './Models/iboughtgames';

@Injectable({
  providedIn: 'root'
})
export class BoughtGamesService {

  private cartUrl = 'http://localhost:3000/cart';
  private boughtGamesUrl = 'http://localhost:3000/boughtGames';

  constructor(private http: HttpClient) {}

  getCartItems(): Observable<ICartItem[]> {
    return this.http.get<ICartItem[]>(this.cartUrl);
  }

  addToCart(cartItem: ICartItem): Observable<ICartItem> {
    return this.http.post<ICartItem>(this.cartUrl, cartItem);
  }

  purchaseGames(userId: number, cartItems: ICartItem[]): Observable<void> {
    return new Observable<void>((observer) => {
      // Move items from cart to boughtGames
      this.http.get<Iboughtgames[]>(`${this.boughtGamesUrl}?userId=${userId}`).subscribe(boughtGames => {
        let userBoughtGames = boughtGames.find(bg => bg.userId === userId);

        if (userBoughtGames) {
          userBoughtGames.cartItems.push(...cartItems);
          this.http.put(`${this.boughtGamesUrl}/${userBoughtGames.id}`, userBoughtGames).subscribe(() => {
            this.clearCart(userId).subscribe(() => {
              observer.next();
              observer.complete();
            });
          });
        } else {
          const newBoughtGames: Iboughtgames = {
            userId,
            cartItems,
            id: Date.now() // Simulate an ID
          };
          this.http.post(this.boughtGamesUrl, newBoughtGames).subscribe(() => {
            this.clearCart(userId).subscribe(() => {
              observer.next();
              observer.complete();
            });
          });
        }
      });
    });
  }

  getPurchasedGames(userId: number): Observable<Iboughtgames[]> {
    return this.http.get<Iboughtgames[]>(`${this.boughtGamesUrl}?userId=${userId}`);
  }

  clearCart(userId: number): Observable<void> {
    return new Observable<void>((observer) => {
      this.getCartItems().subscribe(cartItems => {
        const userCartItems = cartItems.filter(item => item.userId === userId);
        let deletedCount = 0;

        if (userCartItems.length === 0) {
          observer.next();
          observer.complete();
          return;
        }

        userCartItems.forEach(item => {
          this.http.delete(`${this.cartUrl}/${item.id}`).subscribe(() => {
            deletedCount++;
            if (deletedCount === userCartItems.length) {
              observer.next();
              observer.complete();
            }
          });
        });
      });
    });
  }

}
