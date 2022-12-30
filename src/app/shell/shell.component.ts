import { ChangeDetectionStrategy, Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BreakpointObserver } from '@angular/cdk/layout';
import { MatSidenavModule } from '@angular/material/sidenav';
import { NavbarComponent } from './navbar/navbar.component';
import { RouterModule } from '@angular/router';
import { MenuComponent } from './menu/menu.component';
import { SM_SCREEN_WIDTH_THRESHOLD_QUERY } from '@core/config';

@Component({
  selector: 'al-shell',
  standalone: true,
  imports: [CommonModule, MatSidenavModule, NavbarComponent, RouterModule, MenuComponent],
  template: `<!-- Layout with a left-positioned sidenav and main content. -->
    <al-navbar
      class="fixed top-0 left-0 right-0 z-[1150] mat-elevation-z8"
      (toggleMenu)="sidenav.toggle()"></al-navbar>
    <mat-sidenav-container [hasBackdrop]="isSmallScreen">
      <mat-sidenav
        #sidenav
        [mode]="isSmallScreen ? 'over' : 'side'"
        [opened]="!isSmallScreen"
        fixedInViewport
        [fixedTopGap]="navbarHeight"
        class="w-52">
        <al-menu></al-menu>
      </mat-sidenav>
      <mat-sidenav-content
        [style.min-height]="contentHeightMinHeight"
        class="p-4 pt-[72px] h-screen">
        <router-outlet></router-outlet>
      </mat-sidenav-content>
    </mat-sidenav-container>`,
  styles: [],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ShellComponent {
  isSmallScreen = this.breakpointObserver.isMatched(SM_SCREEN_WIDTH_THRESHOLD_QUERY);
  navbarHeight = 56;
  contentHeightMinHeight = `calc(100vh - ${this.navbarHeight}px)`;

  constructor(private breakpointObserver: BreakpointObserver) {}
}
