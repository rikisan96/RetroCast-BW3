import { Component, HostListener, OnInit } from '@angular/core';

@Component({
  selector: 'app-pacman',
  templateUrl: './pacman.component.html',
  styleUrl: './pacman.component.scss'
})
export class PacmanComponent implements OnInit{
  grid: number[][] = [];
  pacman = { x: 1, y: 1 };
  ghosts = [
    { x: 8, y: 8 }
  ];
  food: { x: number, y: number }[] = [];
  direction = 'RIGHT';
  score = 0;
  interval: any;
  foodInterval: any;
  isGameOver = false;

  ngOnInit() {
    this.initializeGrid();
    this.placeFood();
    this.startGameLoop();
  }

  initializeGrid() {
    this.grid = [
      [1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
      [1, 2, 0, 0, 0, 0, 0, 0, 0, 1],
      [1, 0, 1, 1, 0, 1, 1, 1, 0, 1],
      [1, 0, 1, 1, 0, 1, 1, 1, 0, 1],
      [1, 0, 0, 0, 0, 0, 0, 0, 0, 1],
      [1, 0, 1, 1, 0, 1, 1, 1, 0, 1],
      [1, 0, 1, 1, 0, 1, 1, 1, 0, 1],
      [1, 0, 0, 0, 0, 0, 0, 0, 0, 1],
      [1, 0, 1, 1, 0, 1, 1, 1, 4, 1],
      [1, 1, 1, 1, 1, 1, 1, 1, 1, 1]
    ];
  }

  placeFood() {
    for (let i = 1; i < 9; i++) {
      for (let j = 1; j < 9; j++) {
        if (this.grid[i][j] === 0) {
          this.grid[i][j] = 3; // Place food
          this.food.push({ x: j, y: i });
        }
      }
    }
  }

  startGameLoop() {
    this.interval = setInterval(() => {
      if (!this.isGameOver) {
        this.movePacman();
        this.updateGhosts();
        this.checkCollision();
      }
    }, 200);

    this.foodInterval = setInterval(() => {
      if (!this.isGameOver) {
        this.resetFood();
      }
    }, 10000); // Reset food every 10 seconds
  }

  movePacman() {
    let newX = this.pacman.x;
    let newY = this.pacman.y;

    switch (this.direction) {
      case 'UP':
        newY--;
        break;
      case 'DOWN':
        newY++;
        break;
      case 'LEFT':
        newX--;
        break;
      case 'RIGHT':
        newX++;
        break;
    }

    if (this.grid[newY][newX] !== 1 && this.grid[newY][newX] !== 4) { // Check if not a wall or ghost
      if (this.grid[newY][newX] === 3) { // If food
        this.score++;
      }

      this.grid[this.pacman.y][this.pacman.x] = 0;
      this.pacman.x = newX;
      this.pacman.y = newY;
      this.grid[this.pacman.y][this.pacman.x] = 2;
    }
  }

  updateGhosts() {
    this.ghosts.forEach(ghost => {
      const directions = ['UP', 'DOWN', 'LEFT', 'RIGHT'];
      const direction = directions[Math.floor(Math.random() * directions.length)];
      let newX = ghost.x;
      let newY = ghost.y;

      switch (direction) {
        case 'UP': newY--; break;
        case 'DOWN': newY++; break;
        case 'LEFT': newX--; break;
        case 'RIGHT': newX++; break;
      }

      if (this.grid[newY][newX] !== 1 && this.grid[newY][newX] !== 2 && this.grid[newY][newX] !== 4) { // Check if not a wall, Pac-Man, or another ghost
        this.grid[ghost.y][ghost.x] = 0;
        ghost.x = newX;
        ghost.y = newY;
        this.grid[ghost.y][ghost.x] = 4;
      }
    });
  }

  checkCollision() {
    this.ghosts.forEach(ghost => {
      if (ghost.x === this.pacman.x && ghost.y === this.pacman.y) {
        this.gameOver();
      }
    });
  }

  gameOver() {
    clearInterval(this.interval);
    clearInterval(this.foodInterval);
    this.isGameOver = true;
  }

  resetGame() {
    this.score = 0;
    this.isGameOver = false;
    this.pacman = { x: 1, y: 1 };
    this.ghosts = [{ x: 8, y: 8 }];
    this.food = [];
    this.initializeGrid();
    this.placeFood();
    this.startGameLoop();
  }

  resetFood() {
    this.food.forEach(f => {
      if (this.grid[f.y][f.x] === 0) {
        this.grid[f.y][f.x] = 3;
      }
    });
  }

  @HostListener('window:keydown', ['$event'])
  handleKeyDown(event: KeyboardEvent) {
    switch (event.key) {
      case 'ArrowUp':
        this.direction = 'UP';
        break;
      case 'ArrowDown':
        this.direction = 'DOWN';
        break;
      case 'ArrowLeft':
        this.direction = 'LEFT';
        break;
      case 'ArrowRight':
        this.direction = 'RIGHT';
        break;
    }
  }
}