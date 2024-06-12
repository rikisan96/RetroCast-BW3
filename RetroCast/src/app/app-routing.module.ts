import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuard } from './auth/auth.guard';
import { GuestGuard } from './auth/guest.guard';

const routes: Routes = [
  {
    path: '',
    redirectTo: '/home',
    pathMatch: 'full',
  },
  {
    path: 'home',
    loadChildren: () =>
      import('./pages/home/home.module').then((m) => m.HomeModule),
  },
  {
    path: 'login',
    loadChildren: () => import('./auth/auth.module').then((m) => m.AuthModule),
    canActivate: [GuestGuard],
    canActivateChild: [GuestGuard],
  },
  {
    path: 'library',
    loadChildren: () =>
      import('./pages/library/library.module').then((m) => m.LibraryModule),
    canActivate: [AuthGuard],
    canActivateChild: [AuthGuard],
  },
  {
    path:'arcade',
    loadChildren:() =>
      import('./pages/arcade/arcade.module').then((m) => m.ArcadeModule),
    canActivate: [AuthGuard],
    canActivateChild: [AuthGuard],
  },
  {
    path:'pingpong',
    loadChildren:() =>
      import('./pages/pingpong/pingpong.module').then((m) => m.PingpongModule),
    canActivate: [AuthGuard],
  },
  {
    path:'pacman',
    loadChildren:() =>
      import('./pages/pacman/pacman.module').then((m) => m.PacmanModule),
    canActivate: [AuthGuard],
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
