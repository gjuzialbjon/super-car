import {
  ChangeDetectionStrategy,
  Component,
  EventEmitter,
  Output,
} from '@angular/core';
import { CommonModule } from '@angular/common';

import { MatToolbarModule } from '@angular/material/toolbar';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';

@Component({
  selector: 'al-navbar',
  standalone: true,
  imports: [CommonModule, MatToolbarModule, MatButtonModule, MatIconModule],
  template: ` <!-- Toolbar menu -->
    <mat-toolbar class="h-14">
      <button
        mat-icon-button
        class="example-icon"
        aria-label="Example icon-button with menu icon"
        (click)="toggleMenu.emit()">
        <mat-icon>menu</mat-icon>
      </button>
      <span>Kerra</span>
      <span class="example-spacer"></span>
      <button
        mat-icon-button
        class="example-icon favorite-icon"
        aria-label="Example icon-button with heart icon">
        <mat-icon>favorite</mat-icon>
      </button>
      <button
        mat-icon-button
        class="example-icon"
        aria-label="Example icon-button with share icon">
        <mat-icon>share</mat-icon>
      </button>
    </mat-toolbar>`,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class NavbarComponent {
  @Output() toggleMenu = new EventEmitter();
}
