import {
  ChangeDetectionStrategy,
  Component,
  Input,
  OnDestroy,
  OnInit,
} from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatButtonModule } from '@angular/material/button';

import { Subject } from 'rxjs';
import { CarComponent } from './car/car.component';
import { FiltersComponent } from './filters/filters.component';
import { FiltersService } from './filters/filters.service';
import { FormsModule, ReactiveFormsModule, UntypedFormGroup } from '@angular/forms';

@Component({
  selector: 'al-cars-list',
  standalone: true,
  imports: [
    CommonModule,
    MatButtonModule,
    CarComponent,
    FiltersComponent,
    FormsModule,
    ReactiveFormsModule,
  ],
  template: `<!-- -->
    <div class="flex-col md:flex md:flex-row md:justify-center">
      <al-filters class="mr-4" [form]="form"></al-filters>
      <div class="grid gap-4 grid-cols-1 lg:grid-cols-2 2xl:grid-cols-3">
        <al-car *ngFor="let car of cars" [car]="car"></al-car>
      </div>
    </div> `,
  styles: [],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class CarsListComponent implements OnInit, OnDestroy {
  @Input() cars: any[] = [];
  loading = true;

  titles = ['Tile long of cars to check how it looks'];
  descs = [
    `The Shiba Inu is the smallest of the six original and distinct spitz breeds of dog
      from Japan. A small, agile dog that copes very well with mountainous terrain, the
      Shiba Inu was originally bred for hunting.`,
    `The Shiba Inu is the smallest of the six original and distinct spitz breeds of dog
      from Japan. A smang.`,
    `The Shiba nting.`,
    `The Shiba Inu is the smallest of the six original and distinct spitz breeds of dog
      from Japan. A small, agile dog that copes very well with mountainous terrain, the
      Shiba Inu was originally bred for hunting.`,
    `The Shiba Inu is the smallest of the six original and distinct spitz breeds of dog
      from Japan. A small, agile dog that copes very well with mountainous terrain, the
      Shiba Inu was originally bred for hunting.`,
    `The Shiba Inu is the smallest copes very well with mountainous terrain, the
      Shiba Inu was originally bred for hunting.`,
    `The Shiry well with mountainous terrain, the Shiba Inu was originally bred for hunting.`,
  ];
  years = [2011];
  prices = [43122, 3234];
  kms = [23233, 43444];

  form!: UntypedFormGroup;

  destroyed = new Subject<void>();

  constructor(private filtersService: FiltersService) {}

  ngOnInit(): void {
    this.form = this.filtersService.initForm();

    for (const title of this.titles) {
      for (const desc of this.descs) {
        for (const year of this.years) {
          for (const price of this.prices) {
            for (const km of this.kms) {
              this.cars.push({ title, desc, year, price, km });
            }
          }
        }
      }
    }
  }

  onValueChange(formVal: any) {
    console.log(formVal);
  }

  ngOnDestroy() {
    this.destroyed.next();
    this.destroyed.complete();
  }
}
