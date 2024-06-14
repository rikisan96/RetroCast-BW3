// src/app/character/character.component.ts
import { Component, OnInit } from '@angular/core';
import { iCharacter, iOptions } from '../../Models/i-character';
import { CharacterOptionsService } from '../../Service/options.service';
import { AvatarService } from '../../Service/avatar.service';

@Component({
  selector: 'app-character',
  templateUrl: './character.component.html',
  styleUrls: ['./character.component.scss']
})
export class CharacterComponent implements OnInit {
  character: iCharacter = {
    body: '',
    face: '',
    armLeft: '',
    armRight: '',
    legLeft: '',
    legRight: ''
  };

  options: iOptions = { body: [], face: [], arms: [], legs: [] };
  currentIndexes: { [key: string]: number } = {
    body: 0,
    face: 0,
    armLeft: 0,
    armRight: 0,
    legLeft: 0,
    legRight: 0
  };

  isEditing: boolean = true;

  constructor(
    private characterOptionsService: CharacterOptionsService,
    private avatarService: AvatarService
  ) {}

  ngOnInit(): void {
    this.options = this.characterOptionsService.getOptions();
    this.updateCharacter('body', this.options.body[0]);
    this.updateCharacter('face', this.options.face[0]);
    this.updateCharacter('armLeft', this.options.arms[0]);
    this.updateCharacter('armRight', this.options.arms[0]);
    this.updateCharacter('legLeft', this.options.legs[0]);
    this.updateCharacter('legRight', this.options.legs[0]);
  }

  updateCharacter(attribute: keyof iCharacter, value: string): void {
    this.character[attribute] = value;
  }

  changeOption(attribute: keyof iCharacter, direction: number): void {
    const options = this.getOptionsForAttribute(attribute);
    if (!options) {
      console.error(`No options found for attribute: ${attribute}`);
      return;
    }

    const currentIndex = this.currentIndexes[attribute];
    let newIndex = currentIndex + direction;

    if (newIndex < 0) {
      newIndex = options.length - 1;
    } else if (newIndex >= options.length) {
      newIndex = 0;
    }

    this.currentIndexes[attribute] = newIndex;
    this.updateCharacter(attribute, options[newIndex]);
  }

  getOptionsForAttribute(attribute: keyof iCharacter): string[] | undefined {
    switch (attribute) {
      case 'body':
        return this.options.body;
      case 'face':
        return this.options.face;
      case 'armLeft':
      case 'armRight':
        return this.options.arms;
      case 'legLeft':
      case 'legRight':
        return this.options.legs;
      default:
        return undefined;
    }
  }

  finalizeSelection(): void {
    this.isEditing = false;
    this.avatarService.setAvatar(this.character);
  }

  editCharacter(): void {
    this.isEditing = true;
  }
}