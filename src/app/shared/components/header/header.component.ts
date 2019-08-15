import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  template: `
    <mat-toolbar color="primary">
      <mat-toolbar-row>
        <span>ODE Portal</span>
      </mat-toolbar-row>
    </mat-toolbar>
  `
})
export class HeaderComponent {
  constructor() {}
}
