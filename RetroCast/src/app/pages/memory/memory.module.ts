import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MemoryComponent } from './memory.component';
import { MemoryRoutingModule } from './memory-routing.module';



@NgModule({
  declarations: [
    MemoryComponent
  ],
  imports: [
    CommonModule,
    MemoryRoutingModule
  ]
})
export class MemoryModule { }
