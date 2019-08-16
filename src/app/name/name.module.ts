import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { NameRoutingModule } from './name-routing.module';
import { UpdateNameComponent } from './update/update.component';


@NgModule({
  declarations: [UpdateNameComponent],
  imports: [
    CommonModule,
    NameRoutingModule
  ]
})
export class NameModule { }
