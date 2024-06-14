// src/app/services/character-options.service.ts
import { Injectable } from '@angular/core';
import { iOptions } from '../Models/i-character';

@Injectable({
  providedIn: 'root'
})
export class CharacterOptionsService {

  getOptions(): iOptions {
    return {
      face: [
        '../assets/character/face/1.jpg',
        '../assets/character/face/2.jpg',
        '../assets/character/face/3.jpg',
        '../assets/character/face/4.jpg',
        '../assets/character/face/5.jpg',
        '../assets/character/face/6.jpg',
        '../assets/character/face/7.jpg',
        '../assets/character/face/8.jpg',
      ],
      body: [
        '../assets/character/body/1.jpg',
        '../assets/character/body/2.jpg',
        '../assets/character/body/3.jpg',
        '../assets/character/body/4.jpg',
        '../assets/character/body/5.jpg',
        '../assets/character/body/6.jpg',
        '../assets/character/body/7.jpg',
        '../assets/character/body/8.jpg',

      ],
      arms: [
        '../assets/character/arm/1.jpg',
        '../assets/character/arm/2.jpg',
        '../assets/character/arm/3.jpg',
        '../assets/character/arm/4.jpg',
        '../assets/character/arm/5.jpg',
        '../assets/character/arm/6.jpg',
        '../assets/character/arm/7.jpg',
        '../assets/character/arm/8.jpg',
        '../assets/character/arm/9.jpg',
      ],
      legs: [
        '../assets/character/leg/1.jpg',
        '../assets/character/leg/2.jpg',
        '../assets/character/leg/3.jpg',
        '../assets/character/leg/4.jpg',
        '../assets/character/leg/5.jpg',
        '../assets/character/leg/6.jpg',
        '../assets/character/leg/7.jpg',
        '../assets/character/leg/8.jpg',
      ],
    };
  }
}
