import { Component } from '@angular/core';
import { iGameList } from '../../Models/i-game-list';
import { GamesService } from '../../Service/games.service';
import { AuthService } from '../../auth/auth.service';
import { iUser } from '../../Models/i-user';
import { ICartItem } from '../../Models/i-cart-item';
import { Iboughtgames } from '../../Models/iboughtgames';
import { CartService } from '../../Service/cart.service';

@Component({
  selector: 'app-library',
  templateUrl: './library.component.html',
  styleUrl: './library.component.scss',
})

//Lybrary deve contenere la libreria di TUTTI i giochi di x Utente


export class LibraryComponent {
  gameList: iGameList[] = [];
  purchasedGames: ICartItem[] = [];
  cartItems: ICartItem[] = [];
  selectedGame: iGameList | null = null;
  showGameDetails = false;
  user!: iUser;

  constructor(
    private gameSvc: GamesService,
    private cartSvc: CartService,
    private authSvc: AuthService
  ) {}

  ngOnInit() {
    this.authSvc.user$.subscribe((user) => {
      if (user) {
        this.user = user;
        this.loadPurchasedGames();
        this.loadCartItems();
      }
    });

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

  loadPurchasedGames() {
    if (this.user) {
      this.cartSvc.getPurchasedGames(this.user.id).subscribe(
        (boughtGames: Iboughtgames[]) => {
          this.purchasedGames = boughtGames.flatMap((bg) => bg.cartItems);
          console.log(this.purchasedGames);
        },
        (error) => {
          console.error('Error loading purchased games:', error);
        }
      );
    }
  }

  loadCartItems() {
    this.cartSvc.getCartGames(this.user.id).subscribe(
      (cartItems) => {
        this.cartItems = cartItems;
        console.log(this.cartItems);
      },
      (error) => {
        console.error('Error loading cart items:', error);
      }
    );
  }

  purchaseGames() {
    if (this.user && this.cartItems.length > 0) {
      this.cartSvc.purchaseGames().subscribe(
        () => {
          this.loadPurchasedGames();
          this.loadCartItems();
          console.log('Purchase successful');
        },
        (error) => {
          console.error('Purchase failed:', error);
        }
      );
    }
  }
}
