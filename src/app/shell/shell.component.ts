import { ChangeDetectionStrategy, Component } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MatSidenavModule } from '@angular/material/sidenav';
import { NavbarComponent } from './navbar/navbar.component';
import { RouterModule } from '@angular/router';
import { MenuComponent } from './menu/menu.component';

@Component({
  selector: 'al-shell',
  standalone: true,
  imports: [CommonModule, MatSidenavModule, NavbarComponent, RouterModule, MenuComponent],
  template: `<!-- Layout with a left-positioned sidenav and main content. -->
    <al-navbar (toggleMenu)="sidenav.toggle()"></al-navbar>
    <mat-sidenav-container>
      <mat-sidenav
        #sidenav
        mode="side"
        opened
        fixedInViewport
        [fixedTopGap]="64"
        class="w-52">
        <al-menu></al-menu>
      </mat-sidenav>
      <mat-sidenav-content class="p-4">
        <!-- <router-outlet></router-outlet> -->
        <div class="content mat-elevation-z8">Main content here!</div>
      </mat-sidenav-content>
    </mat-sidenav-container>`,
  styles: [],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ShellComponent {}
