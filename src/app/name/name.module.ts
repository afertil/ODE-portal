import { NgModule } from '@angular/core';

import { NameRoutingModule } from './name-routing.module';

import { NameComponent } from './containers/name.component';
import { NameFormComponent } from './components/name-form/name-form.component';
import { SharedModule } from '../shared/shared.module';

@NgModule({
  declarations: [NameComponent, NameFormComponent],
  imports: [NameRoutingModule, SharedModule.forRoot()]
})
export class NameModule {}
