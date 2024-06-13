import { Component } from '@angular/core';

@Component({
  selector: 'app-cross',
  templateUrl: './cross.component.html',
  styleUrls: ['./cross.component.scss']
})
export class CrossComponent {
  board: string[][] = [
    ['', '', ''],
    ['', '', ''],
    ['', '', '']
  ];
  currentPlayer: string = 'X';
  winner: string | null = null;

  makeMove(row: number, col: number): void {
    if (!this.board[row][col] && !this.winner) {
      this.board[row][col] = this.currentPlayer;
      if (this.checkWinner()) {
        this.winner = this.currentPlayer;
      } else {
        this.currentPlayer = this.currentPlayer === 'X' ? 'O' : 'X';
        if (this.currentPlayer === 'O') {
          this.computerMove();
        }
      }
    }
  }

  computerMove(): void {
    // Strategia semplice: trova la prima cella vuota e fai la mossa
    for (let i = 0; i < this.board.length; i++) {
      for (let j = 0; j < this.board[i].length; j++) {
        if (this.board[i][j] === '') {
          this.board[i][j] = this.currentPlayer;
          if (this.checkWinner()) {
            this.winner = this.currentPlayer;
          } else {
            this.currentPlayer = 'X';
          }
          return;
        }
      }
    }
  }

  checkWinner(): boolean {
    const lines = [
      // Rows
      [this.board[0][0], this.board[0][1], this.board[0][2]],
      [this.board[1][0], this.board[1][1], this.board[1][2]],
      [this.board[2][0], this.board[2][1], this.board[2][2]],
      // Columns
      [this.board[0][0], this.board[1][0], this.board[2][0]],
      [this.board[0][1], this.board[1][1], this.board[2][1]],
      [this.board[0][2], this.board[1][2], this.board[2][2]],
      // Diagonals
      [this.board[0][0], this.board[1][1], this.board[2][2]],
      [this.board[0][2], this.board[1][1], this.board[2][0]]
    ];

    return lines.some(line => line.every(cell => cell === this.currentPlayer));
  }

  resetGame(): void {
    this.board = [
      ['', '', ''],
      ['', '', ''],
      ['', '', '']
    ];
    this.currentPlayer = 'X';
    this.winner = null;
  }
}