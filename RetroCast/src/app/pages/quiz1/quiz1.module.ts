import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Quiz1Component } from './quiz1.component';
import { Quiz1RoutingModule } from './quiz1-routing.module';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [Quiz1Component],
  imports: [
    CommonModule,
    FormsModule,
    Quiz1RoutingModule
  ]
})
export class Quiz1Module { }
