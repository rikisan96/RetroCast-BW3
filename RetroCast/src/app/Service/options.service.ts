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
        '../assets/character/face/head.png',
        '../assets/character/face/head1.png',
        '../assets/character/face/head2.png',
        '../assets/character/face/head3.png',
      ],
      body: [
        '../assets/character/body/body.png',
        '../assets/character/body/body1.png',
        '../assets/character/body/body2.png',
        '../assets/character/body/body3.png',
      ],
      arms: [
        '../assets/character/arm/arm.png',
        '../assets/character/arm/arm1.png',
        '../assets/character/arm/arm2.png',
        '../assets/character/arm/arm3.png',
      ],
      legs: [
        '../assets/character/leg/leg.png',
        '../assets/character/leg/leg1.png',
        '../assets/character/leg/leg2.png',
        '../assets/character/leg/leg3.png',
      ],
    };
  }
}
