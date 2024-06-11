import { Component } from '@angular/core';
import { iGameList } from '../../Models/i-game-list';
import { GamesService } from '../../Service/games.service';

@Component({
  selector: 'app-library',
  templateUrl: './library.component.html',
  styleUrl: './library.component.scss'
})
export class LibraryComponent {

  gameList: iGameList[]= [];

  constructor(private gameSvc:GamesService){}

  ngOnInit(){
    this.gameSvc.getAllGames().subscribe((game) => {
      this.gameList = game;
      console.log(this.gameList);
    })
  }

}
