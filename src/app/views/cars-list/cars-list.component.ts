import { ChangeDetectionStrategy, Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatButtonModule } from '@angular/material/button';

@Component({
  selector: 'al-cars-list',
  standalone: true,
  imports: [CommonModule, MatButtonModule],
  template: ` <section>
    <div class="example-label">Raised</div>
    <div class="example-button-row">
      <button mat-raised-button>Basic</button>
      <button mat-raised-button color="primary">Primary</button>
      <button mat-raised-button color="accent">Accent</button>
      <button mat-raised-button color="warn">Warn</button>
      <button mat-raised-button disabled>Disabled</button>
      <a mat-raised-button href="https://www.google.com/" target="_blank"
        >Link</a
      >
    </div>
  </section>`,
  styles: [],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class CarsListComponent {}
