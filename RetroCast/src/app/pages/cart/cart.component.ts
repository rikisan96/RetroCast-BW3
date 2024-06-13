import { Component } from '@angular/core';
import { AuthService } from '../../auth/auth.service';
import { CartService } from '../../Service/cart.service';
import { iUser } from '../../Models/i-user';
import { iGameList } from '../../Models/i-game-list';
import { ICartItem } from '../../Models/i-cart-item';
import { BoughtGamesService } from '../../bought-games.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrl: './cart.component.scss',
})
export class CartComponent {
  user!: iUser;
  cartGames: ICartItem[] = [];
  isLoggedIn: boolean = false;

  constructor(private authSvc: AuthService, private cartSvc: CartService, private route: Router) {}

  ngOnInit() {
    this.authSvc.isLoggedIn$.subscribe(
      (isLoggedIn) => (this.isLoggedIn = isLoggedIn)
    );
    this.authSvc.user$.subscribe((user) => {
      if (user) this.user = user;
    });
    this.loadCartGames();
  }

  loadCartGames() {
    if (this.user) {
      this.cartSvc
        .getCartGames(this.user.id)
        .subscribe((games: ICartItem[]) => {
          this.cartGames = games;
          console.log(this.cartGames);
        });
    }
  }

  removeFromCart(cartItemId: number) {
    this.cartSvc.removeFromCart(cartItemId).subscribe(() => {
      this.loadCartGames();
    });
  }

  purchaseGames() {
    this.cartSvc.purchaseGames().subscribe(
      () => {
        console.log('Purchase successful');
        this.loadCartGames();
        this.route.navigate(['/library']);
      },
      (error) => {
        console.error('Purchase failed:', error);
      }
    );
  }
}
