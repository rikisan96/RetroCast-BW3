import { Component } from '@angular/core';
import { iGameList } from '../../Models/i-game-list';
import { GamesService } from '../../Service/games.service';
import { AuthService } from '../../auth/auth.service';
import { iUser } from '../../Models/i-user';
import { CartService } from '../../Service/cart.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss',
})
export class HomeComponent {
  gameList: iGameList[] = [];
  shoppingCartArr: iGameList[] = [];
  user!: iUser;

  constructor(
    private gameSvc: GamesService,
    private authSvc: AuthService,
    private cartSvc: CartService
  ) {}

  ngOnInit() {
    this.gameSvc.getAllGames().subscribe((game) => {
      this.gameList = game;
      console.log(this.gameList);
      this.authSvc.user$.subscribe((user) => {
        if (user) {
          this.user = user;
        }
      });
    });
  }
  addToCart(game: iGameList) {
    this.cartSvc.addToCart(game).subscribe(() => {
      this.shoppingCartArr.push(game);
      console.log(this.shoppingCartArr);
    });
  }
}
