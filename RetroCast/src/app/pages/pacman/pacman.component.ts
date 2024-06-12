import { Component, HostListener, OnInit } from '@angular/core';

@Component({
  selector: 'app-pacman',
  templateUrl: './pacman.component.html',
  styleUrls: ['./pacman.component.scss']
})
export class PacmanComponent implements OnInit {
  grid: number[][] = [];
  pacman = { x: 1, y: 1 };
  ghosts = [
    { x: 8, y: 8, color: 'red' },
    { x: 10, y: 10, color: 'blue' }
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
      [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
      [1, 2, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1],
      [1, 0, 1, 1, 0, 1, 1, 1, 0, 1, 1, 1, 0, 1, 0, 1],
      [1, 0, 1, 1, 0, 1, 1, 1, 0, 1, 1, 1, 0, 1, 0, 1],
      [1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1],
      [1, 0, 1, 1, 0, 1, 1, 1, 0, 1, 1, 1, 0, 1, 0, 1],
      [1, 0, 1, 1, 0, 1, 1, 1, 0, 1, 1, 1, 0, 1, 0, 1],
      [1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1],
      [1, 0, 1, 1, 0, 1, 1, 1, 4, 1, 1, 1, 0, 1, 0, 1],
      [1, 0, 1, 1, 0, 1, 1, 1, 0, 1, 1, 1, 0, 1, 0, 1],
      [1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1],
      [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1]
    ];
  }

  placeFood() {
    this.food = [];
    for (let i = 1; i < 11; i++) {
      for (let j = 1; j < 15; j++) {
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
        this.checkCollision(); // Ensure collision check is called here
      }
    }, 200);

    this.foodInterval = setInterval(() => {
      if (!this.isGameOver) {
        this.resetFood();
      }
    }, 15000); // Reset food every 15 seconds
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

    console.log(`Trying to move Pacman to (${newX}, ${newY})`);

    if (this.grid[newY][newX] !== 1 && !this.isGhostAt(newX, newY)) { // Check if not a wall or ghost
      if (this.grid[newY][newX] === 3) { 
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
      const validMoves: { x: number, y: number }[] = [];

      directions.forEach(direction => {
        let newX = ghost.x;
        let newY = ghost.y;

        switch (direction) {
          case 'UP': newY--; break;
          case 'DOWN': newY++; break;
          case 'LEFT': newX--; break;
          case 'RIGHT': newX++; break;
        }

        if (this.grid[newY][newX] !== 1 && !this.isGhostAt(newX, newY) && this.grid[newY][newX] !== 2) {
          validMoves.push({ x: newX, y: newY });
        }
      });

      if (validMoves.length > 0) {
        const move = validMoves[Math.floor(Math.random() * validMoves.length)];
        this.grid[ghost.y][ghost.x] = 0; // Clear old position
        ghost.x = move.x;
        ghost.y = move.y;
        this.grid[ghost.y][ghost.x] = 4; // Set new position
        console.log(`Moved Ghost to (${ghost.x}, ${ghost.y})`);
      }
    });
  }

  isGhostAt(x: number, y: number): boolean {
    return this.ghosts.some(ghost => ghost.x === x && ghost.y === y);
  }

  checkCollision() {
    this.ghosts.forEach(ghost => {
      console.log(`Checking collision: Pacman (${this.pacman.x}, ${this.pacman.y}), Ghost (${ghost.x}, ${ghost.y})`);

      if (Math.abs(ghost.x - this.pacman.x) <= 1 && Math.abs(ghost.y - this.pacman.y) <= 1) {
        console.log('Collision detected');
        this.gameOver();
      }
    });
  }

  gameOver() {
    console.log('Game over');
    this.isGameOver = true;
    clearInterval(this.interval);
    clearInterval(this.foodInterval);
    setTimeout(() => {
      this.resetGame();
    }, 2000);
  }

  resetGame() {
    console.log('Resetting game');
    this.score = 0;
    this.isGameOver = false;
    this.pacman = { x: 1, y: 1 };
    this.ghosts = [
      { x: 8, y: 8, color: 'red' },
      { x: 10, y: 10, color: 'blue' }
    ];
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

  getGhostClass(row: number, col: number): string {
    const ghost = this.ghosts.find(g => g.x === col && g.y === row);
    return ghost ? `ghost ${ghost.color}` : '';
  }
}
