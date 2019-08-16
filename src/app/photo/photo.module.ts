import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PhotoRoutingModule } from './photo-routing.module';
import { UpdatePhotoComponent } from './update/update.component';


@NgModule({
  declarations: [UpdatePhotoComponent],
  imports: [
    CommonModule,
    PhotoRoutingModule
  ]
})
export class PhotoModule { }
