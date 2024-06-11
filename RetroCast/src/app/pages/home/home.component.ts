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
  selectedPlatformContainer!:string;
  startYear: number | null = null;
  endYear: number | null = null;
  selectedPlatform: string | null = null;
  selectedGenre: string | null = null;

  constructor(private gameSvc: GamesService) {}

  ngOnInit() {
    this.gameSvc.getAllGames().subscribe((games) => {
      this.gameList = games;
      this.filteredGameList = games;
      console.log('Loaded games:', this.gameList);
    });
  }

  filterByYear(startYear: number, endYear: number) {
    this.startYear = startYear;
    this.endYear = endYear;
    this.applyFilters();
    console.log(`Filtered games from ${startYear} to ${endYear}:`, this.filteredGameList);
  }

  filterByGenre(genre: string) {
    this.selectedGenre = genre;
    this.applyFilters();
    console.log(`Filtered games by genre (${genre}):`, this.filteredGameList);
  }

  filterByPlatform(platform: string) {
    this.selectedPlatform = platform;
    this.applyFilters();
    console.log(`Filtered games by platform (${platform}):`, this.filteredGameList);
  }

  filterByName() {
    this.applyFilters();
    console.log(`Filtered games by name (${this.searchTerm}):`, this.filteredGameList);
  }

  applyFilters() {
    let filteredList = this.gameList;

    if (this.startYear !== null && this.endYear !== null) {
      filteredList = filteredList.filter(game => game.year >= this.startYear! && game.year <= this.endYear!);
    }

    if (this.selectedGenre) {
      filteredList = filteredList.filter(game => game.genre === this.selectedGenre);
    }

    if (this.selectedPlatform) {
      filteredList = filteredList.filter(game => this.selectedPlatform && game.sysRequirement.includes(this.selectedPlatform));
    }

    if (this.searchTerm) {
      filteredList = filteredList.filter(game => game.Title.toLowerCase().includes(this.searchTerm.toLowerCase()));
    }

    this.filteredGameList = filteredList;
  }

  showForm(filterType: string) {
    this.activeFilter = filterType;
  }

  hideForm() {
    this.activeFilter = null;
  }

  showAllGames() {
    this.filteredGameList = this.gameList;
    this.searchTerm = '';
    this.startYear = null;
    this.endYear = null;
    this.selectedPlatform = null;
    this.selectedGenre = null;
    console.log('Showing all games:', this.filteredGameList);
  }
}
