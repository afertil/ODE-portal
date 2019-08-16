import { Component, OnInit } from '@angular/core';

import { ApplicationService } from './shared/services/application.service';

@Component({
  selector: 'app-root',
  styleUrls: ['./app.component.scss'],
  template: `
    <app-header> </app-header>
    <app-sidenav [applications]="applications"></app-sidenav>
  `
})
export class AppComponent implements OnInit {
  applications: Array<String>;

  constructor(private applicationService: ApplicationService) {}

  ngOnInit() {
    this.applications = this.applicationService.getActiveApplications();
  }
}
