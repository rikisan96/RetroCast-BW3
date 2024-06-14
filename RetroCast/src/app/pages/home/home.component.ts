import { Component, OnInit } from '@angular/core';
import { iGameList } from '../../Models/i-game-list';
import { GamesService } from '../../Service/games.service';
import { AuthService } from '../../auth/auth.service';
import { iUser } from '../../Models/i-user';
import { CartService } from '../../Service/cart.service';
import { DomSanitizer, SafeResourceUrl } from '@angular/platform-browser';
import { Modal } from 'bootstrap';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit {
  gameList: iGameList[] = [];
  shoppingCartArr: iGameList[] = [];
  filteredGameList: iGameList[] = [];
  user!: iUser;
  showLoginInstruction: boolean = false;

  activeFilter: string | null = null;
  searchTerm: string = '';
  selectedPlatformContainer!: string;
  startYear: number | null = null;
  endYear: number | null = null;
  selectedPlatform: string | null = null;
  selectedGenre: string | null = null;
  selectedGame: iGameList | null = null;
  safeTrailerUrl: SafeResourceUrl | null = null;

  loginStep: number = 1;  // Add this line

  constructor(
    private gameSvc: GamesService,
    private authSvc: AuthService,
    private cartSvc: CartService,
    private sanitizer: DomSanitizer
  ) {}

  ngOnInit() {
    this.gameSvc.getAllGames().subscribe((games) => {
      this.gameList = games;
      this.filteredGameList = games;
      console.log('Loaded games:', this.gameList);
    });
    this.authSvc.user$.subscribe((user) => {
      if (user) {
        this.user = user;
        this.showLoginInstruction = false;
      }
    });
  }

  addToCart(game: iGameList) {
    if (!this.user) {
      this.showLoginInstructions();
      return;
    }

    this.cartSvc.addToCart(game).subscribe({
      next: () => {
        this.shoppingCartArr.push(game);
        this.cartSvc.cartLength$.next(this.shoppingCartArr.length);
      },
      error: (error) => {
        console.error(error);
      }
    });
  }

  showLoginInstructions() {
    this.loginStep = 1;  // Reset to the first step
    const modalElement = document.getElementById('loginInstructionsModal');
    if (modalElement) {
      const modal = new Modal(modalElement);
      modal.show();
    } else {
      console.error('Modal element not found');
    }
  }

  nextStep() {
    if (this.loginStep < 3) {  // Assume there are 3 steps
      this.loginStep++;
    }
  }

  previousStep() {
    if (this.loginStep > 1) {
      this.loginStep--;
    }
  }

  filterByYear(startYear: number, endYear: number) {
    this.startYear = startYear;
    this.endYear = endYear;
    this.applyFilters();
    console.log(
      `Filtered games from ${startYear} to ${endYear}:`,
      this.filteredGameList
    );
  }

  filterByGenre(genre: string) {
    this.selectedGenre = genre;
    this.applyFilters();
    console.log(`Filtered games by genre (${genre}):`, this.filteredGameList);
  }

  filterByPlatform(platform: string) {
    this.selectedPlatform = platform;
    this.applyFilters();
    console.log(
      `Filtered games by platform (${platform}):`,
      this.filteredGameList
    );
  }

  filterByName() {
    this.applyFilters();
    console.log(
      `Filtered games by name (${this.searchTerm}):`,
      this.filteredGameList
    );
  }

  applyFilters() {
    let filteredList = this.gameList;

    if (this.startYear !== null && this.endYear !== null) {
      filteredList = filteredList.filter(
        (game) => game.year >= this.startYear! && game.year <= this.endYear!
      );
    }

    if (this.selectedGenre) {
      filteredList = filteredList.filter(
        (game) => game.genre === this.selectedGenre
      );
    }

    if (this.selectedPlatform) {
      filteredList = filteredList.filter(
        (game) =>
          this.selectedPlatform &&
          game.sysRequirement.includes(this.selectedPlatform)
      );
    }

    if (this.searchTerm) {
      filteredList = filteredList.filter((game) =>
        game.Title.toLowerCase().includes(this.searchTerm.toLowerCase())
      );
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
    this.safeTrailerUrl = this.sanitizer.bypassSecurityTrustResourceUrl(game.trailerUrl);
    const modalElement = document.getElementById('gameDetailsModal');
    if (modalElement) {
      const modal = new Modal(modalElement);
      modal.show();
    } else {
      console.error('Modal element not found');
    }
  }
}
