import { ChangeDetectionStrategy, Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatFormFieldModule } from '@angular/material/form-field';
import {
  FormControl,
  FormsModule,
  ReactiveFormsModule,
  UntypedFormGroup,
} from '@angular/forms';
import { MatInputModule } from '@angular/material/input';

@Component({
  selector: 'al-dropdown',
  standalone: true,
  imports: [
    CommonModule,
    MatFormFieldModule,
    MatInputModule,
    FormsModule,
    ReactiveFormsModule,
  ],
  template: ` <!-- Dropdown for form group-->
    <mat-form-field appearance="fill" [formGroup]="form">
      <mat-label>{{ label }}</mat-label>
      <select matNativeControl [formControlName]="control">
        <option *ngFor="let opt of options" [value]="opt.value">{{ opt.label }}</option>
      </select>
    </mat-form-field>`,
  styles: [],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class DropdownComponent {
  @Input() form!: UntypedFormGroup;
  @Input() control!: string;
  @Input() options: any[] = [];
  @Input() label = '';
}
