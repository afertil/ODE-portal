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
} from '@angular/core';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'app-configuration-form',
  template: ``
})
export class ConfigurationFormComponent {
  configuration = new FormControl();
}
