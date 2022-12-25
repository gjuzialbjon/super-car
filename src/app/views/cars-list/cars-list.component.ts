import { ChangeDetectionStrategy, Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'al-cars-list',
  standalone: true,
  imports: [CommonModule],
  template: ` <p>cars-list works!</p> `,
  styles: [],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class CarsListComponent {}
