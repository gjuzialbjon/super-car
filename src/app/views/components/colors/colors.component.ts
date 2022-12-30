import { ChangeDetectionStrategy, Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule, UntypedFormGroup } from '@angular/forms';
import { MatButtonToggleModule } from '@angular/material/button-toggle';

@Component({
  selector: 'al-colors',
  standalone: true,
  imports: [CommonModule, FormsModule, ReactiveFormsModule, MatButtonToggleModule],
  templateUrl: './colors.component.html',
  styles: [],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ColorsComponent {
  @Input() form!: UntypedFormGroup;

  colors = [
    'red',
    'blue',
    'green',
    'white',
    'yellow',
    'black',
    'pink',
    'gray',
    'black',
    'pink',
    'gray',
  ];
}
