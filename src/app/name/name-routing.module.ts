import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { UpdateNameComponent } from './update/update.component';

const ROUTES: Routes = [
  {
    path: 'update',
    component: UpdateNameComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(ROUTES)],
  exports: [RouterModule]
})
export class NameRoutingModule { }
