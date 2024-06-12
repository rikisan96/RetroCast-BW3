import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PingPongComponent } from './pingpong.component';

const routes: Routes = [{ path: '', component: PingPongComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PingpongRoutingModule { }
