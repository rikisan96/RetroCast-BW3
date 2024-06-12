import { Component } from '@angular/core';
import { iGameList } from '../../Models/i-game-list';
import { GamesService } from '../../Service/games.service';

@Component({
  selector: 'app-library',
  templateUrl: './library.component.html',
  styleUrl: './library.component.scss'
})
export class LibraryComponent {

  gameList: iGameList[] = [];
  selectedGame: iGameList | null = null;
  showGameDetails = false;

  constructor(private gameSvc: GamesService) {}

  ngOnInit() {
    this.gameSvc.getAllGames().subscribe((game: iGameList[]) => {
      this.gameList = game;
      console.log(this.gameList);
    });
  }

  onSelectGame(game: iGameList) {
    this.selectedGame = game;
    this.showGameDetails = true;
  }

  onBackToList() {
    this.showGameDetails = false;
    this.selectedGame = null;
  }

}
