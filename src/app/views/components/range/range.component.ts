import { ChangeDetectionStrategy, Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule, UntypedFormGroup } from '@angular/forms';
import { MatInputModule } from '@angular/material/input';
import { MatSliderModule } from '@angular/material/slider';

@Component({
  selector: 'al-range',
  standalone: true,
  imports: [
    CommonModule,
    MatInputModule,
    FormsModule,
    ReactiveFormsModule,
    MatSliderModule,
  ],
  template: `<!-- -->
    <span class="inline-flex w-[200px] flex-col form-field" [formGroup]="form">
      <span class="flex justify-between mx-2">
        <label class="">{{ label }}</label>
        <label *ngIf="startForm === 'startPrice'; else startEnd" class="">
          {{ start.value | currency : 'EUR' : 'symbol' : '1.0-0' }} -
          {{ end.value | currency : 'EUR' : 'symbol' : '1.0-0' }}
        </label>
        <ng-template #startEnd>
          <label for="slider">{{ start.value + ' - ' + end.value }}</label>
        </ng-template>
      </span>
      <mat-slider id="slider" [min]="min" [max]="max" [step]="step">
        <input #start [formControlName]="startForm" matSliderStartThumb />
        <input #end [formControlName]="endForm" matSliderEndThumb />
      </mat-slider>
    </span>`,
  styles: [],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class RangeComponent {
  @Input() form!: UntypedFormGroup;
  @Input() startForm!: string;
  @Input() endForm!: string;
  @Input() min = 0;
  @Input() max = 100;
  @Input() step = 1;
  @Input() label = '';
}
