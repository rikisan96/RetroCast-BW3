import { Component, OnInit, HostListener } from '@angular/core';

@Component({
  selector: 'app-ping-pong',
  templateUrl: './pingpong.component.html',
  styleUrls: ['./pingpong.component.scss']
})
export class PingPongComponent implements OnInit {

  // Definizione delle proprietà per le palette e la palla
  ballX: number = 50;
  ballY: number = 50;
  ballSpeedX: number = 2;
  ballSpeedY: number = 2;
  paddle1Y: number = 40;
  paddle2Y: number = 40;
  paddleHeight: number = 20;
  paddleWidth: number = 2;
  paddle1X: number = 0;  // Aggiunta della posizione X della prima palette
  paddle2X: number = 98; // Aggiunta della posizione X della seconda palette

  constructor() { }

  ngOnInit(): void {
    // Avvia il ciclo di animazione
    this.gameLoop();
  }

  gameLoop() {
    setInterval(() => {
      this.updatePositions();
    }, 1000 / 60); // 60 volte al secondo
  }

  updatePositions() {
    // Muovi la palla
    this.ballX += this.ballSpeedX;
    this.ballY += this.ballSpeedY;

    // Controlla collisioni con i muri
    if (this.ballX < 0 || this.ballX > 100) {
      this.ballSpeedX = -this.ballSpeedX;
    }
    if (this.ballY < 0 || this.ballY > 100) {
      this.ballSpeedY = -this.ballSpeedY;
    }

    // Logica di collisione con le palette
    this.checkPaddleCollision();
  }

  checkPaddleCollision() {
    // Collisione con la prima palette
    if (this.ballX <= this.paddle1X + this.paddleWidth &&
        this.ballY >= this.paddle1Y && this.ballY <= this.paddle1Y + this.paddleHeight) {
      this.ballSpeedX = -this.ballSpeedX;
    }

    // Collisione con la seconda palette
    if (this.ballX >= this.paddle2X &&
        this.ballY >= this.paddle2Y && this.ballY <= this.paddle2Y + this.paddleHeight) {
      this.ballSpeedX = -this.ballSpeedX;
    }
  }

  @HostListener('window:keydown', ['$event'])
  handleKeyboardEvent(event: KeyboardEvent) {
    // Prevenire il comportamento predefinito per evitare lo scrolling
    if (['ArrowUp', 'ArrowDown', 'w', 's'].includes(event.key)) {
      event.preventDefault();
    }

    // Logica per controllare le palette con la tastiera
    if (event.key === 'ArrowUp') {
      this.paddle1Y = Math.max(this.paddle1Y - 5, 0);
    }
    if (event.key === 'ArrowDown') {
      this.paddle1Y = Math.min(this.paddle1Y + 5, 100 - this.paddleHeight);
    }
    if (event.key === 'w') {
      this.paddle2Y = Math.max(this.paddle2Y - 5, 0);
    }
    if (event.key === 's') {
      this.paddle2Y = Math.min(this.paddle2Y + 5, 100 - this.paddleHeight);
    }
  }
}
