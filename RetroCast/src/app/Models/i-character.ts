// src/app/models/i-character.ts
export interface iCharacter {
  body: string;
  face: string;
  armLeft: string;
  armRight: string;
  legLeft: string;
  legRight: string;
}

// src/app/models/i-options.ts
export interface iOptions {
  body: string[];
  face: string[];
  arms: string[];
  legs: string[];
}
