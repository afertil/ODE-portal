import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  styleUrls: ['./app.component.scss'],
  template: `
    <app-header> </app-header>
    <app-sidenav [applications]="[]"></app-sidenav>
  `
})
export class AppComponent {}
