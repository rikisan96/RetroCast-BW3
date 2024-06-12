import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PingpongRoutingModule } from './pingpong-routing.module';
import { PingPongComponent } from './pingpong.component';


@NgModule({
  declarations: [
    PingPongComponent
  ],
  imports: [
    CommonModule,
    PingpongRoutingModule
  ]
})
export class PingpongModule { }
