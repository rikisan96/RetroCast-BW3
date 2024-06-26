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
    path: 'cart',
    loadChildren: () =>
      import('./pages/cart/cart.module').then((m) => m.CartModule),
  },
  {
    path: 'arcade',
    loadChildren: () =>
      import('./pages/arcade/arcade.module').then((m) => m.ArcadeModule),
    canActivate: [AuthGuard],
    canActivateChild: [AuthGuard],
  },
  {
    path: 'pingpong',
    loadChildren: () =>
      import('./pages/pingpong/pingpong.module').then((m) => m.PingpongModule),
    canActivate: [AuthGuard],
  },
  {
    path: 'pacman',
    loadChildren: () =>
      import('./pages/pacman/pacman.module').then((m) => m.PacmanModule),
    canActivate: [AuthGuard],
  },
  {
    path: 'snake',
    loadChildren: () =>
      import('./pages/snake/snake.module').then((m) => m.SnakeModule),
    canActivate: [AuthGuard],
  },
  {
    path: 'breakout',
    loadChildren: () =>
      import('./pages/breakout/breakout.module').then((m) => m.BreakoutModule),
    canActivate: [AuthGuard],
  },
  {
    path: 'memory',
    loadChildren: () =>
      import('./pages/memory/memory.module').then((m) => m.MemoryModule),
    canActivate: [AuthGuard],
  },
  {
    path: 'cross',
    loadChildren: () =>
      import('./pages/cross/cross.module').then((m) => m.CrossModule),
    canActivate: [AuthGuard],
  },
  {
    path: 'page404',
    loadChildren: () =>
      import('./pages/page404/page404.module').then((m) => m.Page404Module),
  },
  {
    path: 'profile',
    loadChildren: () =>
      import('./pages/profile/profile.module').then((m) => m.ProfileModule),
    canActivate: [AuthGuard],
  },{
    path: 'community',
    loadChildren: () =>
      import('./pages/community/community.module').then((m) => m.CommunityModule),
    canActivate: [AuthGuard],
  },{ path: 'quizlist', loadChildren: () => import('./pages/quizlist/quizlist.module').then(m => m.QuizlistModule), canActivate: [AuthGuard] },
  { path: 'quiz/:index', loadChildren: () => import('./pages/quiz1/quiz1.module').then(m => m.Quiz1Module), canActivate: [AuthGuard] },
  { path: 'character', loadChildren: () => import('./pages/character/character.module').then(m => m.CharacterModule), canActivate: [AuthGuard] },
  { path: '**', loadChildren: () => import('./pages/page404/page404.module').then(m => m.Page404Module) },
];
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
