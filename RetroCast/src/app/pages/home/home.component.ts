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
    console.log(`Filtered games from ${startYear} to ${endYear}:`, this.filteredGameList);
  }

  filterByGenre(genre: string) {
    this.filteredGameList = this.gameList.filter(game => game.genre === genre);
    console.log(`Filtered games by genre (${genre}):`, this.filteredGameList);
  }

  filterByPlatform(platform: string) {
    this.filteredGameList = this.gameList.filter(game => game.sysRequirement.includes(platform));
    console.log(`Filtered games by platform (${platform}):`, this.filteredGameList);
  }

  showForm(filterType: string) {
    this.activeFilter = filterType;
  }

  hideForm() {
    this.activeFilter = null;
  }

  showAllGames() {
    this.filteredGameList = this.gameList;
    console.log('Showing all games:', this.filteredGameList);
  }
}
