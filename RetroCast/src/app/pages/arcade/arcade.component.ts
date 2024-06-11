import { Component } from '@angular/core';
import { Pipe, PipeTransform } from '@angular/core';

@Component({
  selector: 'app-arcade',
  templateUrl: './arcade.component.html',
  styleUrl: './arcade.component.scss'
})

@Pipe({
  name: 'truncate'
})

export class ArcadeComponent implements PipeTransform {
  PipeTransform {
    transform(value: string, maxLength: number): string {
      if (value.length > maxLength) {
        return value.substring(0, maxLength) + '...';
      }
      return value;
    }
  }
}
