import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { NameComponent } from './containers/name.component';

const ROUTES: Routes = [
  {
    path: '',
    component: NameComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(ROUTES)],
  exports: [RouterModule]
})
export class NameRoutingModule {}
