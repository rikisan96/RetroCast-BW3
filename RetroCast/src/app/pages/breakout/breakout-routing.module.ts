import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BreakoutComponent } from './breakout.component';

const routes: Routes = [{ path: '', component: BreakoutComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class BreakoutRoutingModule { }
