import { Component } from '@angular/core';

@Component({
  selector: 'app-arcade',
  templateUrl: './arcade.component.html',
  styleUrl: './arcade.component.scss'
})
export class ArcadeComponent {
  readMore: { [key: string]: boolean } = {
    pacman: false,
    pingpong: false,
    snake: false,
    breakout: false
  };

  toggleReadMore(game: string) {
    this.readMore[game] = !this.readMore[game];
  }
}
