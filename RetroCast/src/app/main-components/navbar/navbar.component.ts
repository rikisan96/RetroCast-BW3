import { Component } from '@angular/core';
import { AuthService } from '../../auth/auth.service';
import { CartService } from '../../Service/cart.service';
import { BehaviorSubject } from 'rxjs';
import { Router } from '@angular/router';
import { iUser } from '../../Models/i-user';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.scss',
})
export class NavbarComponent {
  show: boolean = false;
  isLoggedIn: boolean = false;
  cartLength$: BehaviorSubject<number> = new BehaviorSubject<number>(0);
  profileImg:string = '';
  user!: iUser;

  constructor(
    private authSvc: AuthService,
    private cartSvc: CartService,
    private route: Router
  ) {
    this.cartLength$ = this.cartSvc.cartLength$;
    console.log('NavbarComponent constructor:', this.cartLength$.getValue());
  }

  ngOnInit() {
    this.authSvc.isLoggedIn$.subscribe((isLoggedIn) => {
      this.isLoggedIn = isLoggedIn;
      if (this.isLoggedIn) {
        this.authSvc.user$.subscribe((user) => {
          if (user) {
            this.user = user;
            user.profileImageUrl ?? 'path/to/default-image.jpg';
          }
        });
      }
    });
  }
  logout() {
    this.authSvc.logout();
    this.route.navigate(['/login'])
  }
}
