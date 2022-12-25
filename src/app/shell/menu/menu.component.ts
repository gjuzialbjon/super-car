import { ChangeDetectionStrategy, Component } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MatListModule } from '@angular/material/list';
import { MatIconModule } from '@angular/material/icon';

@Component({
  selector: 'al-menu',
  standalone: true,
  imports: [CommonModule, MatListModule, MatIconModule],
  template: ` <!-- List menu for sidebar -->
    <mat-nav-list>
      <mat-list-item *ngFor="let link of links" [activated]="link.isActive">
        <a matListItemTitle href="...">{{ link }}</a>
        <button mat-icon-button (click)="showInfo(link)" matListItemMeta>
          <mat-icon>info</mat-icon>
        </button>
      </mat-list-item>
    </mat-nav-list>`,
  styles: [],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class MenuComponent {
  links = [];

  showInfo(link: unknown) {
    console.log(link);
  }
}
