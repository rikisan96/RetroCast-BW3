import { Component, HostListener, OnInit } from '@angular/core';

@Component({
  selector: 'app-breakout',
  templateUrl: './breakout.component.html',
  styleUrls: ['./breakout.component.scss']
})
export class BreakoutComponent implements OnInit {
  canvas: HTMLCanvasElement | undefined;
  context: CanvasRenderingContext2D | undefined;
  ballRadius: number = 10;
  x: number = 0;
  y: number = 0;
  dx: number = 4; // Increased speed
  dy: number = -4; // Increased speed
  paddleHeight: number = 10;
  paddleWidth: number = 75;
  paddleX: number = 0;
  rightPressed: boolean = false;
  leftPressed: boolean = false;
  brickRowCount: number = 5;
  brickColumnCount: number = 3;
  brickWidth: number = 75;
  brickHeight: number = 20;
  brickPadding: number = 10;
  brickOffsetTop: number = 30;
  brickOffsetLeft: number = 30;
  bricks: any[] = [];
  score: number = 0;
  lives: number = 3;

  ngOnInit() {
    this.initializeGame();
    document.addEventListener('keydown', this.keyDownHandler.bind(this), false);
    document.addEventListener('keyup', this.keyUpHandler.bind(this), false);
    this.draw();
  }

  initializeGame() {
    this.canvas = document.getElementById('myCanvas') as HTMLCanvasElement;
    this.context = this.canvas.getContext('2d') as CanvasRenderingContext2D;
    this.paddleX = (this.canvas.width - this.paddleWidth) / 2;
    this.x = this.canvas.width / 2;
    this.y = this.canvas.height - 30;
    this.bricks = [];
    for (let c = 0; c < this.brickColumnCount; c++) {
      this.bricks[c] = [];
      for (let r = 0; r < this.brickRowCount; r++) {
        this.bricks[c][r] = { x: 0, y: 0, status: 1 };
      }
    }
    this.score = 0;
    this.lives = 3;
    this.dx = 4; // Increased speed
    this.dy = -4; // Increased speed
  }

  keyDownHandler(e: KeyboardEvent) {
    if (e.key == 'Right' || e.key == 'ArrowRight') {
      this.rightPressed = true;
    } else if (e.key == 'Left' || e.key == 'ArrowLeft') {
      this.leftPressed = true;
    }
  }

  keyUpHandler(e: KeyboardEvent) {
    if (e.key == 'Right' || e.key == 'ArrowRight') {
      this.rightPressed = false;
    } else if (e.key == 'Left' || e.key == 'ArrowLeft') {
      this.leftPressed = false;
    }
  }

  collisionDetection() {
    for (let c = 0; c < this.brickColumnCount; c++) {
      for (let r = 0; r < this.brickRowCount; r++) {
        let b = this.bricks[c][r];
        if (b.status == 1) {
          if (this.x > b.x && this.x < b.x + this.brickWidth && this.y > b.y && this.y < b.y + this.brickHeight) {
            this.dy = -this.dy;
            b.status = 0;
            this.score++;
            if (this.score == this.brickRowCount * this.brickColumnCount) {
              alert('YOU WIN, CONGRATULATIONS!');
              this.initializeGame();
            }
          }
        }
      }
    }
  }

  drawBall() {
    if (this.context) {
      this.context.beginPath();
      this.context.arc(this.x, this.y, this.ballRadius, 0, Math.PI * 2);
      this.context.fillStyle = '#0095DD';
      this.context.fill();
      this.context.closePath();
    }
  }

  drawPaddle() {
    if (this.context) {
      this.context.beginPath();
      this.context.rect(this.paddleX, this.canvas!.height - this.paddleHeight, this.paddleWidth, this.paddleHeight);
      this.context.fillStyle = '#0095DD';
      this.context.fill();
      this.context.closePath();
    }
  }

  drawBricks() {
    if (this.context) {
      for (let c = 0; c < this.brickColumnCount; c++) {
        for (let r = 0; r < this.brickRowCount; r++) {
          if (this.bricks[c][r].status == 1) {
            let brickX = c * (this.brickWidth + this.brickPadding) + this.brickOffsetLeft;
            let brickY = r * (this.brickHeight + this.brickPadding) + this.brickOffsetTop;
            this.bricks[c][r].x = brickX;
            this.bricks[c][r].y = brickY;
            this.context.beginPath();
            this.context.rect(brickX, brickY, this.brickWidth, this.brickHeight);
            this.context.fillStyle = '#0095DD';
            this.context.fill();
            this.context.closePath();
          }
        }
      }
    }
  }

  drawScore() {
    if (this.context) {
      this.context.font = '16px Arial';
      this.context.fillStyle = '#0095DD';
      this.context.fillText('Score: ' + this.score, 8, 20);
    }
  }

  drawLives() {
    if (this.context) {
      this.context.font = '16px Arial';
      this.context.fillStyle = '#0095DD';
      this.context.fillText('Lives: ' + this.lives, this.canvas!.width - 65, 20);
    }
  }

  draw() {
    if (this.context) {
      this.context.clearRect(0, 0, this.canvas!.width, this.canvas!.height);
      this.drawBricks();
      this.drawBall();
      this.drawPaddle();
      this.drawScore();
      this.drawLives();
      this.collisionDetection();

      if (this.x + this.dx > this.canvas!.width - this.ballRadius || this.x + this.dx < this.ballRadius) {
        this.dx = -this.dx;
      }
      if (this.y + this.dy < this.ballRadius) {
        this.dy = -this.dy;
      } else if (this.y + this.dy > this.canvas!.height - this.ballRadius) {
        if (this.x > this.paddleX && this.x < this.paddleX + this.paddleWidth) {
          this.dy = -this.dy;
        } else {
          this.lives--;
          if (!this.lives) {
            alert('GAME OVER');
            this.initializeGame();
          } else {
            this.x = this.canvas!.width / 2;
            this.y = this.canvas!.height - 30;
            this.dx = 4; // Increased speed
            this.dy = -4; // Increased speed
            this.paddleX = (this.canvas!.width - this.paddleWidth) / 2;
          }
        }
      }

      if (this.rightPressed && this.paddleX < this.canvas!.width - this.paddleWidth) {
        this.paddleX += 7;
      } else if (this.leftPressed && this.paddleX > 0) {
        this.paddleX -= 7;
      }

      this.x += this.dx;
      this.y += this.dy;
      requestAnimationFrame(this.draw.bind(this));
    }
  }
}