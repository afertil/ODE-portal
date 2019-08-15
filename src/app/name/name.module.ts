import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { NameRoutingModule } from './name-routing.module';
import { UpdateComponent } from './update/update.component';


@NgModule({
  declarations: [UpdateComponent],
  imports: [
    CommonModule,
    NameRoutingModule
  ]
})
export class NameModule { }
