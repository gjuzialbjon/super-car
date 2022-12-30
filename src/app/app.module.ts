import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { ShellComponent } from './shell/shell.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { RouterModule } from '@angular/router';
import { Route } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

const ROUTES: Route[] = [
  {
    path: '',
    redirectTo: 'cars-list',
    pathMatch: 'full',
  },
  {
    path: 'cars-list',
    loadComponent: () =>
      import('./views/cars-list/cars-list.component').then(m => m.CarsListComponent),
  },
  {
    path: '**',
    redirectTo: 'cars-list',
  },
  // ...
];

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    ShellComponent,
    FormsModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
    RouterModule.forRoot(ROUTES, {
      useHash: true,
    }),
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
