import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

// import { UpdatePhotoComponent } from './update/update.component';

const ROUTES: Routes = [
  // {
  //   path: '',
  //   component: UpdatePhotoComponent
  // }
];

@NgModule({
  imports: [RouterModule.forChild(ROUTES)],
  exports: [RouterModule]
})
export class PhotoRoutingModule {}
