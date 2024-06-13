import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../auth/auth.service';
import { iUser } from '../../Models/i-user';

@Component({
  selector: 'app-user-profile',
  templateUrl: './user-profile.component.html',
  styleUrl: './user-profile.component.scss',
})
export class UserProfileComponent implements OnInit {
  userInfo: iUser | null = null;

  constructor(private authService: AuthService) {}

  ngOnInit(): void {
    this.userInfo = this.authService.getUserInfo();
  }
}
