import { NgModule, APP_INITIALIZER, ModuleWithProviders } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';

// Material components
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { MatInputModule } from '@angular/material/input';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import { MatListModule } from '@angular/material/list';
import { MatIconModule } from '@angular/material/icon';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';

import { AppRoutingModule } from '../app-routing.module';
import { ApplicationService } from './services/application.service';
import { HeaderComponent } from './components/header/header.component';
import { SidenavComponent } from './components/sidenav/sidenav.component';

const MATERIAL_MODULES = [
  MatSidenavModule,
  MatToolbarModule,
  MatButtonModule,
  MatSnackBarModule,
  MatInputModule,
  MatSlideToggleModule,
  MatListModule,
  MatIconModule,
  MatProgressSpinnerModule
];

const appInitializerFn = (app: ApplicationService) => () => app.loadAppConfig();

@NgModule({
  declarations: [HeaderComponent, SidenavComponent],
  imports: [...MATERIAL_MODULES, CommonModule, AppRoutingModule, HttpClientModule],
  exports: [...MATERIAL_MODULES, HeaderComponent, SidenavComponent]
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
