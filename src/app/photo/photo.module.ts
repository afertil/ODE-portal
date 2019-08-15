import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PhotoRoutingModule } from './photo-routing.module';
import { UpdateComponent } from './update/update.component';


@NgModule({
  declarations: [UpdateComponent],
  imports: [
    CommonModule,
    PhotoRoutingModule
  ]
})
export class PhotoModule { }
