import { Component, HostListener, OnInit } from '@angular/core';

@Component({
  selector: 'app-snake',
  templateUrl: './snake.component.html',
  styleUrls: ['./snake.component.scss']
})
export class SnakeComponent implements OnInit {
  grid: number[][] = [];
  snake: { x: number, y: number }[] = [];
  food = { x: 0, y: 0 };
  direction = 'RIGHT';
  score = 0;
  interval: any;
  isGameOver = false;

  ngOnInit() {
    this.initializeGrid();
    this.initializeSnake();
    this.placeFood();
    this.startGameLoop();
  }

  initializeGrid() {
    this.grid = Array(20).fill(null).map(() => Array(20).fill(0));
  }

  initializeSnake() {
    this.snake = [{ x: 10, y: 10 }];
    this.grid[10][10] = 1;
  }

  placeFood() {
    let newX, newY;
    do {
      newX = Math.floor(Math.random() * 20);
      newY = Math.floor(Math.random() * 20);
    } while (this.grid[newY][newX] !== 0);
    this.food = { x: newX, y: newY };
    this.grid[newY][newX] = 2;
  }

  startGameLoop() {
    this.interval = setInterval(() => {
      if (!this.isGameOver) {
        this.moveSnake();
      }
    }, 200);
  }

  moveSnake() {
    const head = { ...this.snake[0] };

    switch (this.direction) {
      case 'UP':
        head.y--;
        break;
      case 'DOWN':
        head.y++;
        break;
      case 'LEFT':
        head.x--;
        break;
      case 'RIGHT':
        head.x++;
        break;
    }

    if (this.isCollision(head.x, head.y)) {
      this.gameOver();
      return;
    }

    this.snake.unshift(head);
    if (head.x === this.food.x && head.y === this.food.y) {
      this.score++;
      this.placeFood();
    } else {
      const tail = this.snake.pop();
      if (tail) {
        this.grid[tail.y][tail.x] = 0;
      }
    }
    this.grid[head.y][head.x] = 1;
  }

  isCollision(x: number, y: number): boolean {
    return x < 0 || y < 0 || x >= 20 || y >= 20 || this.grid[y][x] === 1;
  }

  gameOver() {
    this.isGameOver = true;
    clearInterval(this.interval);
    setTimeout(() => {
      this.resetGame();
    }, 2000);
  }

  resetGame() {
    this.score = 0;
    this.isGameOver = false;
    this.initializeGrid();
    this.initializeSnake();
    this.placeFood();
    this.startGameLoop();
  }

  @HostListener('window:keydown', ['$event'])
  handleKeyDown(event: KeyboardEvent) {
    switch (event.key) {
      case 'ArrowUp':
        if (this.direction !== 'DOWN') this.direction = 'UP';
        break;
      case 'ArrowDown':
        if (this.direction !== 'UP') this.direction = 'DOWN';
        break;
      case 'ArrowLeft':
        if (this.direction !== 'RIGHT') this.direction = 'LEFT';
        break;
      case 'ArrowRight':
        if (this.direction !== 'LEFT') this.direction = 'RIGHT';
        break;
    }
  }
}
