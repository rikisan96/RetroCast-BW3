
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

  setAvatar(avatar: iCharacter): void {
    this.avatar = avatar;
  }

  getAvatar(): iCharacter {
    return this.avatar;
  }
}
