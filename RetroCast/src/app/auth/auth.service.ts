import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { BehaviorSubject, Observable, map, tap } from 'rxjs';
import { iUser } from '../Models/i-user';
import { iAuthResponse } from '../Models/i-auth-response';
import { iAuthData } from '../Models/i-auth-data';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  authSubject = new BehaviorSubject<null|iUser>(null);

  syncIsLoggedIn:boolean = false;

  user$ = this.authSubject.asObservable()

  isLoggedIn$ = this.user$.pipe(
    map(user => !!user),
    tap(user => this.syncIsLoggedIn = user)
  )
  jwtHelper: any;

  constructor(
    private http:HttpClient,
    private router:Router
  ) {

  }

  loginUrl:string = 'http://localhost:3000/login'
  registerUrl:string = 'http://localhost:3000/register'

  register(newUser: Partial<iUser>): Observable<iAuthResponse> {
    return this.http.post<iAuthResponse>(this.registerUrl, newUser);
  }

  login(authData: iAuthData): Observable<iAuthResponse> {
    return this.http.post<iAuthResponse>(this.loginUrl, authData)
    .pipe(tap(data => {
        this.authSubject.next(data.user);
        localStorage.setItem('accessData', JSON.stringify(data));
      }));
  }

  logout():void{

    this.authSubject.next(null)
    localStorage.removeItem('accessData')

    this.router.navigate(['/auth'])

  }

  getAccessData():iAuthResponse|null{

    const accessDataJson = localStorage.getItem('accessData')
    if(!accessDataJson) return null

    const accessData:iAuthResponse = JSON.parse(accessDataJson)

    return accessData;
  }


}
