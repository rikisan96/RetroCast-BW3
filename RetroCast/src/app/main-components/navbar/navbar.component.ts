import { Component } from '@angular/core';
import { AuthService } from '../../auth/auth.service';
import { CartService } from '../../Service/cart.service';
import { BehaviorSubject } from 'rxjs';
import { Router } from '@angular/router';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.scss',
})
export class NavbarComponent {
  show: boolean = false;
  isLoggedIn: boolean = false;
  cartLength$: BehaviorSubject<number> = new BehaviorSubject<number>(0);

  constructor(
    private authSvc: AuthService,
    private cartSvc: CartService,
    private route: Router
  ) {
    this.cartLength$ = this.cartSvc.cartLength$;
    console.log('NavbarComponent constructor:', this.cartLength$.getValue());
  }

  ngOnInit() {
    this.authSvc.isLoggedIn$.subscribe(
      (isLoggedIn) => (this.isLoggedIn = isLoggedIn)
    );
  }

  logout() {
    this.authSvc.logout();
    this.route.navigate(['/login'])
  }
}
