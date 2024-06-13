import { Injectable } from '@angular/core';

export interface Question {
  text: string;
  options: string[];
  correctAnswer: string;
}

@Injectable({
  providedIn: 'root'
})
export class QuizService {
  private questions: Question[] = [
    {
      text: 'Quale gioco è considerato il primo videogioco arcade?',
      options: ['Pong', 'Space Invaders', 'Pac-Man', 'Galaga'],
      correctAnswer: 'Pong'
    },
    {
      text: 'Chi è il creatore di Pac-Man?',
      options: ['Shigeru Miyamoto', 'Toru Iwatani', 'Satoshi Tajiri', 'Nolan Bushnell'],
      correctAnswer: 'Toru Iwatani'
    },
    {
      text: 'In quale anno è stato rilasciato il gioco arcade Space Invaders?',
      options: ['1975', '1978', '1980', '1982'],
      correctAnswer: '1978'
    },
    {
      text: 'Quale gioco arcade presenta un personaggio principale che salta sopra i barili lanciati da un gorilla gigante?',
      options: ['Donkey Kong', 'Frogger', 'Q*bert', 'Asteroids'],
      correctAnswer: 'Donkey Kong'
    },
    {
      text: 'Quale di questi giochi arcade è famoso per la sua colonna sonora elettronica e il gameplay basato su serpenti?',
      options: ['Centipede', 'Snake', 'Qix', 'Tron'],
      correctAnswer: 'Tron'
    },
    {
      text: 'In quale gioco arcade il giocatore controlla una rana che deve attraversare una strada trafficata e un fiume per arrivare a casa?',
      options: ['Pac-Man', 'Space Invaders', 'Frogger', 'Galaxian'],
      correctAnswer: 'Frogger'
    },
    {
      text: 'Quale gioco arcade è noto per la sua modalità di gioco cooperativa in cui i giocatori controllano due fratelli idraulici?',
      options: ['Bubble Bobble', 'Double Dragon', 'Contra', 'Mario Bros.'],
      correctAnswer: 'Mario Bros.'
    },
    {
      text: 'Quale gioco arcade presenta un personaggio che deve scalare un edificio mentre evita gli oggetti cadenti?',
      options: ['BurgerTime', 'Donkey Kong', 'Crazy Climber', 'Elevator Action'],
      correctAnswer: 'Crazy Climber'
    },
    {
      text: 'Quale gioco arcade ha come protagonista un cavaliere che combatte contro mostri per salvare una principessa?',
      options: ['Dragon\'s Lair', 'Gauntlet', 'Ghosts\'n Goblins', 'Altered Beast'],
      correctAnswer: 'Ghosts\'n Goblins'
    },
    {
      text: 'In quale gioco arcade il giocatore controlla una navicella spaziale e deve distruggere ondate di alieni per salvare la Terra?',
      options: ['Asteroids', 'Defender', 'Galaga', 'Missile Command'],
      correctAnswer: 'Galaga'
    }
  ];

  getQuestions(): Question[] {
    return this.questions;
  }
}
