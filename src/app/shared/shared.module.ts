import { NgModule, APP_INITIALIZER, ModuleWithProviders } from "@angular/core";
import { CommonModule } from "@angular/common";
import { HttpClientModule } from "@angular/common/http";
import { ReactiveFormsModule } from "@angular/forms";
import { RouterModule } from "@angular/router";

// Material components
import { MatSidenavModule } from "@angular/material/sidenav";
import { MatToolbarModule } from "@angular/material/toolbar";
import { MatButtonModule } from "@angular/material/button";
import { MatSnackBarModule } from "@angular/material/snack-bar";
import { MatInputModule } from "@angular/material/input";
import { MatCheckboxModule } from "@angular/material/checkbox";
import { MatListModule } from "@angular/material/list";
import { MatIconModule } from "@angular/material/icon";
import { MatProgressSpinnerModule } from "@angular/material/progress-spinner";
import { MatFormFieldModule } from "@angular/material/form-field";

import { ApplicationService } from "./services/application.service";
import { HeaderComponent } from "./components/header/header.component";
import { SidenavComponent } from "./components/sidenav/sidenav.component";

const MATERIAL_MODULES = [
  MatSidenavModule,
  MatToolbarModule,
  MatButtonModule,
  MatSnackBarModule,
  MatInputModule,
  MatCheckboxModule,
  MatListModule,
  MatIconModule,
  MatProgressSpinnerModule,
  MatFormFieldModule
];

const appInitializerFn = (app: ApplicationService) => () => app.loadAppConfig();

@NgModule({
  declarations: [HeaderComponent, SidenavComponent],
  imports: [
    ...MATERIAL_MODULES,
    CommonModule,
    HttpClientModule,
    ReactiveFormsModule,
    RouterModule
  ],
  exports: [
    ...MATERIAL_MODULES,
    HeaderComponent,
    SidenavComponent,
    CommonModule,
    HttpClientModule,
    ReactiveFormsModule
  ]
})
export class SharedModule {
  static forRoot(): ModuleWithProviders {
    return {
      ngModule: SharedModule,
      providers: [
        ApplicationService,
        {
          provide: APP_INITIALIZER,
          useFactory: appInitializerFn,
          multi: true,
          deps: [ApplicationService]
        }
      ]
    };
  }
}
