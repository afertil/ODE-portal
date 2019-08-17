import {
  Component,
  Input,
  Output,
  EventEmitter,
  ChangeDetectionStrategy,
  OnInit,
  OnChanges,
  ElementRef,
  ViewChild,
  ChangeDetectorRef,
  SimpleChanges
} from "@angular/core";
import { FormControl, FormBuilder } from "@angular/forms";
import { Configuration } from "src/app/shared/interfaces/configuration";

@Component({
  selector: "app-configuration-form",
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `
    <div class="configuration-form">
      <form [formGroup]="form" (ngSubmit)="onSubmit()">
        <mat-form-field *ngFor="let app of configuration.applications">
          <mat-checkbox [ngModel]="app.enabled" formControlName="name">{{
            app.name
          }}</mat-checkbox>
        </mat-form-field>
      </form>
    </div>
  `
})
export class ConfigurationFormComponent {
  @Input() configuration: Configuration;

  @Output() update = new EventEmitter<Configuration>();

  form = this.fb.group({});

  constructor(private fb: FormBuilder) {
    console.log(this.configuration);
  }
}
