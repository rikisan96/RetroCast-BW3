import { Component } from '@angular/core';

interface Card {
  id: number;
  image: string;
  flipped: boolean;
  matched: boolean;
}

@Component({
  selector: 'app-memory',
  templateUrl: './memory.component.html',
  styleUrl: './memory.component.scss'
})
export class MemoryComponent {
  cards: Card[] = [];
  flippedCards: Card[] = [];
  images: string[] = [
    '../../assets/imgs/memory/Bloque.jpg',
    '../../assets/imgs/memory/fantasma.jpg',
    '../../assets/imgs/memory/piano.jpg',
    '../../assets/imgs/memory/snoopie.jpg',
    '../../assets/imgs/memory/mario_star.jpg',
    '../../assets/imgs/memory/cd.jpg'
  ];

  constructor() {}

  ngOnInit(): void {
    this.initializeCards();
  }

  initializeCards(): void {
    this.cards = [];
    this.images.forEach((image, index) => {
      this.cards.push({ id: index * 2, image: image, flipped: false, matched: false });
      this.cards.push({ id: index * 2 + 1, image: image, flipped: false, matched: false });
    });
    this.cards = this.shuffleArray(this.cards);
  }

  shuffleArray(array: any[]): any[] {
    return array.sort(() => 0.5 - Math.random());
  }

  flipCard(card: Card): void {
    if (card.flipped || card.matched || this.flippedCards.length === 2) {
      return;
    }

    card.flipped = true;
    this.flippedCards.push(card);

    if (this.flippedCards.length === 2) {
      this.checkForMatch();
    }
  }

  checkForMatch(): void {
    const [card1, card2] = this.flippedCards;
    if (card1.image === card2.image) {
      card1.matched = true;
      card2.matched = true;
    } else {
      setTimeout(() => {
        card1.flipped = false;
        card2.flipped = false;
      }, 1000);
    }
    this.flippedCards = [];
  }
}