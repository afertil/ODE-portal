import { Component, OnInit } from "@angular/core";

import { Configuration } from "src/app/shared/interfaces/configuration";
import { ApplicationService } from "src/app/shared/services/application.service";

@Component({
  selector: "app-configuration",
  // styleUrls: ['./update.component.scss'],
  template: `
    <div>
      <app-configuration-form
        [configuration]="configuration"
        (update)="updateConfig($event)"
      >
      </app-configuration-form>
    </div>
  `
})
export class ConfigurationComponent implements OnInit {
  configuration: Configuration;

  constructor(private applicationService: ApplicationService) {}

  ngOnInit() {
    this.configuration = this.applicationService.getConfig();
    console.log("Init config app", this.configuration);
  }

  /**
   * Update configuration
   *
   * @param {Configuration} config
   */
  updateConfig(config: Configuration) {
    // this.articlesService.updateArticle(key, event)
    //   .subscribe(
    //     res => {
    //       this.loggerService.success('Article successfully updated');
    //       this.backToArticles();
    //     },
    //     error => this.loggerService.error(error.error.message)
    //   );
  }
}
