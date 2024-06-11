import { Component } from '@angular/core';
import { iGameList } from '../../Models/i-game-list';
import { GamesService } from '../../Service/games.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent {
  gameList: iGameList[]= [];

  constructor(private gameSvc:GamesService){}

  ngOnInit(){
    this.gameSvc.getAllGames().subscribe((game) => {
      this.gameList = game;
      console.log(this.gameList);
    })
  }
}
