import { ChangeDetectionStrategy, Component } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MatListModule } from '@angular/material/list';
import { MatIconModule } from '@angular/material/icon';
import { RouterModule } from '@angular/router';
import { ROUTES } from '@core/routes-config';
@Component({
  selector: 'al-menu',
  standalone: true,
  imports: [CommonModule, MatListModule, MatIconModule, RouterModule],
  template: ` <!-- List menu for sidebar -->
    <mat-nav-list>
      <a
        mat-list-item
        *ngFor="let link of links"
        [routerLink]="link.path"
        routerLinkActive="active-menu">
        <mat-icon matListItemIcon class="mr-2">{{ link.icon }}</mat-icon>
        <span class="menu-item-title">{{ link.title }}</span>
      </a>
    </mat-nav-list>`,
  styles: [],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class MenuComponent {
  links = ROUTES;
}
