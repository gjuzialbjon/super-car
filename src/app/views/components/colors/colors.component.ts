import { ChangeDetectionStrategy, Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule, UntypedFormGroup } from '@angular/forms';
import { MatButtonToggleModule } from '@angular/material/button-toggle';
import { MatIconModule } from '@angular/material/icon';

@Component({
  selector: 'al-colors',
  standalone: true,
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    MatButtonToggleModule,
    MatIconModule,
  ],
  templateUrl: './colors.component.html',
  styles: [],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ColorsComponent {
  @Input() form!: UntypedFormGroup;
  selectedColors: string[] = [];

  colors = ['red', 'blue', 'green', 'white', 'yellow', 'black', 'pink', 'gray'];

  onColorsChange(colors: any) {
    this.selectedColors = colors.value;
  }

  getCheckColor(color: string) {
    if (!this.selectedColors.includes(color)) {
      return 'transparent';
    }

    if (color === 'white' || color === 'yellow') {
      return 'black';
    }

    return 'white';
  }
}
