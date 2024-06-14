
import { Injectable } from '@angular/core';
import { iCharacter } from '../Models/i-character';

@Injectable({
  providedIn: 'root'
})
export class AvatarService {
  private avatar: iCharacter = {
    body: '',
    face: '',
    armLeft: '',
    armRight: '',
    legLeft: '',
    legRight: ''
  };

  constructor() {
    const savedAvatar = localStorage.getItem('avatar');
    if (savedAvatar) {
      this.avatar = JSON.parse(savedAvatar);
    }
  }

  setAvatar(avatar: iCharacter): void {
    this.avatar = avatar;
    localStorage.setItem('avatar', JSON.stringify(this.avatar));
  }

  getAvatar(): iCharacter {
    return this.avatar;
  }
}