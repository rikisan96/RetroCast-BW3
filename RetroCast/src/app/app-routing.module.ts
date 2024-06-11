import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    loadChildren: () =>
      import('./pages/home/home.module').then((m) => m.HomeModule),
  },
  {
    path:'login',
    loadChildren:() => import('./auth/auth.module').then((m) => m.AuthModule)
  },
  { path: 'library', loadChildren: () => import('./pages/library/library.module').then(m => m.LibraryModule) },
  { path: 'pingpong', loadChildren: () => import('./pages/pingpong/pingpong.module').then(m => m.PingpongModule) },
  { path: 'arcade', loadChildren: () => import('./pages/arcade/arcade.module').then(m => m.ArcadeModule) },
  { path: 'pacman', loadChildren: () => import('./pages/pacman/pacman.module').then(m => m.PacmanModule) }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
