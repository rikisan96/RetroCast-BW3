import { Component } from '@angular/core';
import { AuthService } from '../../auth/auth.service';
import { CartService } from '../../Service/cart.service';
import { iUser } from '../../Models/i-user';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrl: './cart.component.scss',
})
export class CartComponent {
  user!: iUser;
  isLoggedIn: boolean = false;

  constructor(private authSvc: AuthService, protected cartSvc: CartService) {}

  ngOnInit() {
    this.authSvc.isLoggedIn$.subscribe((isLoggedIn) => {
      this.isLoggedIn = isLoggedIn;
    });

    this.authSvc.user$.subscribe((user) => {
      if (user) {
        this.user = user;
        this.cartSvc.loadCartGames();
      }
    });
  }

  deleteCartItem(cartItemId: number) {
    this.cartSvc.deleteGame(cartItemId).subscribe(() => {
      console.log('oggetto eliminato');
    });
  }
}
