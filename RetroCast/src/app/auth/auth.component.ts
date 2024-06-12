import { Component } from '@angular/core';
import { iAuthData } from '../Models/i-auth-data';
import { AuthService } from './auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-auth',
  templateUrl: './auth.component.html',
  styleUrl: './auth.component.scss'
})
export class AuthComponent {

  authData:iAuthData = {
    email: '',
    password: ''
  }

  constructor(
    private authSvc:AuthService,
    private router:Router
  ){}

  login(){
    this.authSvc.login(this.authData)
    .subscribe(()=>{
      this.router.navigate(['/']);
    })
  }

}
