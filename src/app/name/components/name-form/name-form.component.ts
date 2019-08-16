import {
  Component,
  OnInit,
  ChangeDetectionStrategy,
  Input,
  Output,
  EventEmitter,
  SimpleChanges
} from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-name-form',
  // changeDetection: ChangeDetectionStrategy.OnPush,
  styleUrls: ['./update.component.scss'],
  template: `
    <div class="name-form">
      <form [formGroup]="form" (ngSubmit)="onSubmit()">
        <mat-form-field>
          <input matInput placeholder="Name*" formControlName="name" />
          <mat-error *ngIf="required('name')">
            Name is <strong>required</strong>
          </mat-error>
        </mat-form-field>

        <button type="submit" [disabled]="!form.valid">Submit</button>
      </form>

      {{ name }}
    </div>
  `
})
export class NameFormComponent implements OnInit {
  @Input() name: String;

  @Output() update = new EventEmitter<String>();

  form = this.fb.group({
    name: ['', Validators.required]
  });

  constructor(private fb: FormBuilder) {}

  ngOnInit() {
    this.name = '';
    console.log('Init name-form');
  }

  ngOnChanges(changes: SimpleChanges) {
    if (this.name) this.form.patchValue(this.name);
  }

  required(field) {
    return (
      this.form.get(field).hasError('required') && this.form.get(field).touched
    );
  }

  onSubmit() {
    if (this.form.valid) this.update.emit(this.form.value);
  }
}
