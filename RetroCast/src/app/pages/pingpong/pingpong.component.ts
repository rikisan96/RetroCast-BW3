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
  ballSpeedX: number = 0.5;
  ballSpeedY: number = 0.5;
  paddle1Y: number = 40;
  paddle2Y: number = 40;
  paddleHeight: number = 20;
  paddleWidth: number = 2;
  paddle1X: number = 0;  // Aggiunta della posizione X della prima palette
  paddle2X: number = 98; // Aggiunta della posizione X della seconda palette

  // Punteggi
  player1Score: number = 0;
  player2Score: number = 0;

  // Velocità iniziale della palla
  initialBallSpeed: number = 0.5;
  ballSpeedIncrement: number = 0.01;

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
    if (this.ballY < 0 || this.ballY > 100) {
      this.ballSpeedY = -this.ballSpeedY;
    }

    // Controlla se la palla ha superato i limiti laterali (punto per un giocatore)
    if (this.ballX < 0) {
      this.player2Score++;
      this.resetGame();
    } else if (this.ballX > 100) {
      this.player1Score++;
      this.resetGame();
    }

    // Logica di collisione con le palette
    this.checkPaddleCollision();

    // Aumenta gradualmente la velocità della palla
    this.incrementBallSpeed();
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

  resetGame() {
    // Riposiziona la palla al centro e resetta la velocità
    this.ballX = 50;
    this.ballY = 50;
    // Imposta la velocità iniziale con una direzione fissa (verso destra e in basso)
    this.ballSpeedX = this.initialBallSpeed;
    this.ballSpeedY = this.initialBallSpeed;
  }

  incrementBallSpeed() {
    // Incrementa la velocità della palla gradualmente
    if (Math.abs(this.ballSpeedX) < 2) {  // Limita la velocità massima
      this.ballSpeedX += (this.ballSpeedX > 0 ? this.ballSpeedIncrement : -this.ballSpeedIncrement);
    }
    if (Math.abs(this.ballSpeedY) < 2) {  // Limita la velocità massima
      this.ballSpeedY += (this.ballSpeedY > 0 ? this.ballSpeedIncrement : -this.ballSpeedIncrement);
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
