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
  { path: 'library', loadChildren: () => import('./pages/library/library.module').then(m => m.LibraryModule) }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
