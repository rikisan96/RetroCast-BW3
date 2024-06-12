import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CrossComponent } from './cross.component';
import { CrossRoutingModule } from './cross-routing.module';



@NgModule({
  declarations: [
    CrossComponent
  ],
  imports: [
    CommonModule,
    CrossRoutingModule
  ]
})
export class CrossModule { }
