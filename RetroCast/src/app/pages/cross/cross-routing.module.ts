import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CrossComponent } from './cross.component';

const routes: Routes = [{ path: '', component: CrossComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CrossRoutingModule { }
