import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BreakoutComponent } from './breakout.component';
import { BreakoutRoutingModule } from './breakout-routing.module';



@NgModule({
  declarations: [
    BreakoutComponent
  ],
  imports: [
    CommonModule,
    BreakoutRoutingModule
  ]
})
export class BreakoutModule { }
