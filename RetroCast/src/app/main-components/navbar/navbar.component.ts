import { Component } from '@angular/core';
import { AuthService } from '../../auth/auth.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.scss'
})
export class NavbarComponent {

  show: boolean = false;
  isLoggedIn:boolean = false;

  constructor(private authSvc:AuthService){}

  ngOnInit(){

    this.authSvc.isLoggedIn$
    .subscribe(isLoggedIn => this.isLoggedIn = isLoggedIn )

  }

  logout(){
    this.authSvc.logout()
  }
}
