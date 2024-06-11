import { Component, OnInit } from '@angular/core';
import { iGameList } from '../../Models/i-game-list';
import { GamesService } from '../../Service/games.service';
import { AuthService } from '../../auth/auth.service';
import { iUser } from '../../Models/i-user';
import { CartService } from '../../Service/cart.service';
import { Modal } from 'bootstrap';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  gameList: iGameList[]  = [];
  shoppingCartArr: iGameList[] = [];
  filteredGameList: iGameList[] = [];  user!: iUser;

  activeFilter: string | null = null;
  searchTerm: string = '';
  selectedPlatformContainer!: string;
  startYear: number | null = null;
  endYear: number | null = null;
  selectedPlatform: string | null = null;
  selectedGenre: string | null = null;
  selectedGame: iGameList | null = null;

  constructor(
    private gameSvc:  GamesService,
    private authSvc: AuthService,
    private cartSvc: CartService
  )  {}

  ngOnInit() {
    this.gameSvc.getAllGames().subscribe((games) => {
      this.gameList = games;
      this.filteredGameList = games;
      console.log('Loaded games:', this.gameList);
    });
    this.authSvc.user$.subscribe((user) => {
      if (user) {
        this.user = user;
      }
    });

  };

  addToCart(game: iGameList) {
    this.cartSvc.addToCart(game).subscribe(() => {
      this.shoppingCartArr.push(game);
      console.log(this.shoppingCartArr);
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


  viewGameDetails(game: iGameList) {
    this.selectedGame = game;
    const modalElement = document.getElementById('gameDetailsModal');
    if (modalElement) {
      const modal = new Modal(modalElement);
      modal.show();
    } else {
      console.error('Modal element not found');
    }
  }

}