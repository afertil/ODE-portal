import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";

// Material components
import { MatSidenavModule } from "@angular/material/sidenav";
import { MatToolbarModule } from "@angular/material/toolbar";
import { MatButtonModule } from "@angular/material/button";
import { MatSnackBarModule } from "@angular/material/snack-bar";
import { MatInputModule } from "@angular/material/input";
import { MatSlideToggleModule } from "@angular/material/slide-toggle";

import { LoggerService } from "./services/logger.service";
import { HeaderComponent } from "./components/header/header.component";
import { SidenavComponent } from "./components/sidenav/sidenav.component";

const MATERIAL_MODULES = [
  MatSidenavModule,
  MatToolbarModule,
  MatButtonModule,
  MatSnackBarModule,
  MatInputModule,
  MatSlideToggleModule
];

@NgModule({
  declarations: [LoggerService, HeaderComponent, SidenavComponent],
  imports: [...MATERIAL_MODULES, CommonModule],
  exports: [
    ...MATERIAL_MODULES,
    LoggerService,
    HeaderComponent,
    SidenavComponent
  ]
})
export class SharedModule {}
