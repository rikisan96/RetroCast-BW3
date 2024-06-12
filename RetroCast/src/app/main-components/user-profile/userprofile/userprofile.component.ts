import { UserService } from './../user.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-userprofile',
  templateUrl: './userprofile.component.html',
  styleUrl: './userprofile.component.scss',
})
export class UserprofileComponent implements OnInit {
  user: any;

  constructor(private UserService: UserService) {}

  ngOnInit(): void {
    this.UserService.currentUser.subscribe((user) => {
      this.user = user;
    });
  }
}
