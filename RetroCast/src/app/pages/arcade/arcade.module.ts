import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ArcadeRoutingModule } from './arcade-routing.module';
import { ArcadeComponent } from './arcade.component';


@NgModule({
  declarations: [
    ArcadeComponent
  ],
  imports: [
    CommonModule,
    ArcadeRoutingModule
  ],
  exports: [
    ArcadeComponent
  ]
})
export class ArcadeModule { }
