import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { ShellComponent } from './shell/shell.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { RouterModule } from '@angular/router';
import { Route } from '@angular/router';

const ROUTES: Route[] = [
  {
    path: '',
    redirectTo: 'cars-list',
    pathMatch: 'full',
  },
  {
    path: 'cars-list',
    loadComponent: () =>
      import('./views/cars-list/cars-list.component').then(
        m => m.CarsListComponent
      ),
  },
  // ...
];

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    ShellComponent,
    BrowserAnimationsModule,
    RouterModule.forRoot(ROUTES),
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
