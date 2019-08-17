import { NgModule } from "@angular/core";

import { ConfigurationRoutingModule } from "./configuration-routing.module";
import { SharedModule } from "../shared/shared.module";

import { ConfigurationComponent } from "./containers/configuration.component";
import { ConfigurationFormComponent } from "./components/configuration-form/configuration-form.component";

@NgModule({
  declarations: [ConfigurationComponent, ConfigurationFormComponent],
  imports: [ConfigurationRoutingModule, SharedModule]
})
export class ConfigurationModule {}
