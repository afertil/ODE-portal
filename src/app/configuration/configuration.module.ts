import { NgModule } from '@angular/core';

import { ConfigurationRoutingModule } from './configuration-routing.module';
import { SharedModule } from '../shared/shared.module';

import { ConfigurationComponent } from './containers/configuration.component';

@NgModule({
  declarations: [ConfigurationComponent],
  imports: [ConfigurationRoutingModule, SharedModule]
})
export class ConfigurationModule {}
