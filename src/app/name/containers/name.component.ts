import { Component, OnInit } from "@angular/core";

import { Configuration } from "src/app/shared/interfaces/configuration";
import { ApplicationService } from "src/app/shared/services/application.service";

@Component({
  selector: "app-name",
  // styleUrls: ['./update.component.scss'],
  template: `
    <div>
      <app-name-form [name]="name" (update)="updateName($event)">
      </app-name-form>
    </div>
  `
})
export class NameComponent implements OnInit {
  name: String;

  constructor() {}

  ngOnInit() {
    console.log("init Name app:");
  }

  /**
   * Update name
   *
   * @param {String} name
   */
  updateName(name: String) {
    console.log(name);
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
