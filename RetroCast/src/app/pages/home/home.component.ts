// home.component.ts
import { Component, OnInit } from '@angular/core';
import { iGameList } from '../../Models/i-game-list';
import { GamesService } from '../../Service/games.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  gameList: iGameList[] = [];
  filteredGameList: iGameList[] = [];
  activeFilter: string | null = null;
  searchTerm: string = '';

  constructor(private gameSvc: GamesService) {}

  ngOnInit() {
    this.gameSvc.getAllGames().subscribe((games) => {
      this.gameList = games;
      this.filteredGameList = games;
      console.log('Loaded games:', this.gameList);
    });
  }

  filterByYear(startYear: number, endYear: number) {
    this.filteredGameList = this.gameList.filter(game => game.year >= startYear && game.year <= endYear);
    this.applySearchFilter();
    console.log(`Filtered games from ${startYear} to ${endYear}:`, this.filteredGameList);
  }

  filterByGenre(genre: string) {
    this.filteredGameList = this.gameList.filter(game => game.genre === genre);
    this.applySearchFilter();
    console.log(`Filtered games by genre (${genre}):`, this.filteredGameList);
  }

  filterByPlatform(platform: string) {
    this.filteredGameList = this.gameList.filter(game => game.sysRequirement.includes(platform));
    this.applySearchFilter();
    console.log(`Filtered games by platform (${platform}):`, this.filteredGameList);
  }

  filterByName() {
    this.applySearchFilter();
    console.log(`Filtered games by name (${this.searchTerm}):`, this.filteredGameList);
  }

  applySearchFilter() {
    const filteredList = this.filteredGameList.filter(game => game.Title.toLowerCase().includes(this.searchTerm.toLowerCase()));
    this.filteredGameList = this.searchTerm ? filteredList : this.filteredGameList;
  }

  showForm(filterType: string) {
    this.activeFilter = filterType;
  }

  hideForm() {
    this.activeFilter = null;
  }

  showAllGames() {
    this.filteredGameList = this.gameList;
    this.searchTerm = ''; // Reset search term
    console.log('Showing all games:', this.filteredGameList);
  }
}

