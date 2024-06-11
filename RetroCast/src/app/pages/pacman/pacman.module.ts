import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PacmanComponent } from './pacman.component';
import { PacmanRoutingModule } from './pacman-routing.module';



@NgModule({
  declarations: [
    PacmanComponent
  ],
  imports: [
    CommonModule,
    PacmanRoutingModule
  ]
})
export class PacmanModule { }
