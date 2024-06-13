import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { BehaviorSubject, Observable } from 'rxjs';
import { map, tap } from 'rxjs/operators';
import { JwtHelperService } from '@auth0/angular-jwt';
import { iUser } from '../Models/i-user';
import { iAuthResponse } from '../Models/i-auth-response';
import { iAuthData } from '../Models/i-auth-data';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  authSubject = new BehaviorSubject<null | iUser>(null);

  syncIsLoggedIn: boolean = false;

  user$ = this.authSubject.asObservable();

  isLoggedIn$ = this.user$.pipe(
    map(user => !!user),
    tap(user => this.syncIsLoggedIn = !!user)
  );

  jwtHelper = new JwtHelperService(); // Initialize JwtHelperService

  constructor(
    private http: HttpClient,
    private router: Router
  ) {
    this.restoreUser();
  }

  loginUrl: string = 'http://localhost:3000/login';
  registerUrl: string = 'http://localhost:3000/register';

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

  logout(): void {
    this.authSubject.next(null);
    localStorage.removeItem('accessData');
    this.router.navigate(['/auth']);
  }

  getAccessData(): iAuthResponse | null {
    const accessDataJson = localStorage.getItem('accessData');
    if (!accessDataJson) return null;

    const accessData: iAuthResponse = JSON.parse(accessDataJson);
    return accessData;
  }

  autoLogout(): void {
    const accessData = this.getAccessData();
    if (!accessData) return;

    const expDate = this.jwtHelper.getTokenExpirationDate(accessData.accessToken) as Date;
    const expMs = expDate.getTime() - new Date().getTime();
    setTimeout(() => this.logout(), expMs);
  }

  restoreUser(): void {
    const accessData = this.getAccessData();
    if (!accessData) return;

    if (this.jwtHelper.isTokenExpired(accessData.accessToken)) return;

    this.authSubject.next(accessData.user);
    this.autoLogout();
  }
  updateUser(user: iUser): Observable<iUser> {
    const userToUpdate = { ...user };

    // Logga i dati inviati per il debugging
    console.log('Sending update request with data:', userToUpdate);

    return this.http.put<iUser>(`http://localhost:3000/users/${user.id}`, userToUpdate)
      .pipe(tap(updatedUser => {
        this.authSubject.next(updatedUser);
        const accessData = this.getAccessData();
        if (accessData) {
          accessData.user = updatedUser;
          localStorage.setItem('accessData', JSON.stringify(accessData));
        }
      }));
  }
  deleteUser(userId: number): Observable<void> {
    return this.http.delete<void>(`http://localhost:3000/users/${userId}`)
      .pipe(tap(() => {
        this.authSubject.next(null);
        localStorage.removeItem('accessData');
        this.router.navigate(['/']);
      }));
  }
  
}
