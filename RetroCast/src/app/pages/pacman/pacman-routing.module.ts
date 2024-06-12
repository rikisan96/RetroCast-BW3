import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PacmanComponent } from './pacman.component';

const routes: Routes = [{ path: '', component: PacmanComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PacmanRoutingModule { }
