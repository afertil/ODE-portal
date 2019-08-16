import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { UpdateConfigComponent } from './update/update.component';

const ROUTES: Routes = [
  {
    path: '',
    component: UpdateConfigComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(ROUTES)],
  exports: [RouterModule]
})
export class ConfigurationRoutingModule { }
