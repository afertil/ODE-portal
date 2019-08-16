import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const ROUTES: Routes = [
  {
    path: 'name',
    loadChildren: () => import('./name/name.module').then(mod => mod.NameModule),
  },
  {
    path: 'photo',
    loadChildren: () => import('./photo/photo.module').then(mod => mod.PhotoModule),
  }
];

@NgModule({
  imports: [RouterModule.forRoot(ROUTES)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
