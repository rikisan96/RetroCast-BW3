import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { Quiz1Component } from './quiz1.component';

const routes: Routes = [
  { path: '', component: Quiz1Component }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class Quiz1RoutingModule { }
