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
  favoriteUsers: iUser[] = []; // Lista degli utenti preferiti

  constructor(private communityService: CommunityService) {}

  ngOnInit(): void {
    this.communityService.getUsers().subscribe((users: iUser[]) => {
      this.users = users;
      this.filteredUsers = users;
      this.loadFavorites(); // Carica i preferiti dal localStorage
    });
  }

  onSearchChange(): void {
    this.filteredUsers = this.users.filter(user =>
      user.username.toLowerCase().includes(this.searchQuery.toLowerCase())
    );
  }

  addToFavorites(user: iUser): void {
    if (!this.favoriteUsers.some(favUser => favUser.id === user.id)) {
      this.favoriteUsers.push(user);
      this.saveFavorites();
    }
  }

  saveFavorites(): void {
    localStorage.setItem('favoriteUsers', JSON.stringify(this.favoriteUsers));
  }

  loadFavorites(): void {
    const favorites = localStorage.getItem('favoriteUsers');
    if (favorites) {
      this.favoriteUsers = JSON.parse(favorites);
    }
  }

  isFavorite(user: iUser): boolean {
    return this.favoriteUsers.some(favUser => favUser.id === user.id);
  }
}