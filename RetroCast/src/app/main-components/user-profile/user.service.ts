import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { iUser } from '../../Models/i-user';

@Injectable({
  providedIn: 'root',
})
export class UserService {
  private userSource = new BehaviorSubject<any>(null);
  currentUser = this.userSource.asObservable();

  constructor() {}
  setUser(user: any) {
    this.userSource.next(user);
  }
}
