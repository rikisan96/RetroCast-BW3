import { Component, OnInit } from '@angular/core';
import { CommunityService } from '../../Service/community.service'; // Verifica il percorso corretto
import { iUser } from '../../Models/i-user';

@Component({
  selector: 'app-community',
  templateUrl: './community.component.html',
  styleUrls: ['./community.component.scss']
})
export class CommunityComponent implements OnInit {
  users: iUser[] = [];
  filteredUsers: iUser[] = [];
  searchQuery: string = '';

  constructor(private communityService: CommunityService) {}

  ngOnInit(): void {
    this.communityService.getUsers().subscribe((users: iUser[]) => {
      this.users = users;
      this.filteredUsers = users;
    });
  }

  onSearchChange(): void {
    this.filteredUsers = this.users.filter(user =>
      user.username.toLowerCase().includes(this.searchQuery.toLowerCase())
    );
  }
}
