import { Component } from '@angular/core';
import { iGameList } from '../../Models/i-game-list';
import { CartService } from '../../Service/cart.service';
import { iUser } from '../../Models/i-user';
import { ICartItem } from '../../Models/i-cart-item';
import { AuthService } from '../../auth/auth.service';

@Component({
  selector: 'app-library',
  templateUrl: './library.component.html',
  styleUrl: './library.component.scss',
})
export class LibraryComponent {
  gameList: iGameList[] = [];
  selectedGame: iGameList | null = null;
  showGameDetails = false;
  user!: iUser;
  isLoggedIn: boolean = false;

  constructor(private cartSvc: CartService, private authSvc: AuthService) {}

  ngOnInit() {
    this.authSvc.isLoggedIn$.subscribe((isLoggedIn) => {
      this.isLoggedIn = isLoggedIn;
    });
    this.authSvc.user$.subscribe((user) => {
      if (user) {
        this.user = user;
        this.loadBoughtGames();
      }
    });
  }

  loadBoughtGames() {
    this.cartSvc
      .getBoughtGames(this.user.id)
      .subscribe((games: ICartItem[]) => {
        this.gameList = games.map((cartItem) => cartItem.game);
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
