import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SnakeComponent } from './snake.component';
import { SankeRoutingModule } from './snake.routing.module';



@NgModule({
  declarations: [
    SnakeComponent
  ],
  imports: [
    CommonModule,
    SankeRoutingModule
  ]
})
export class SnakeModule { }
