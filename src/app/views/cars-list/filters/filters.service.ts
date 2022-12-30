import { Injectable } from '@angular/core';
import { FormBuilder, UntypedFormGroup } from '@angular/forms';
import { APP_CONFIG } from '@core/config';
import { debounceTime } from 'rxjs/operators';

@Injectable({
  providedIn: 'root',
})
export class FiltersService {
  form!: UntypedFormGroup;
  config = APP_CONFIG;

  constructor(private fb: FormBuilder) {}

  initForm() {
    this.form = this.fb.group({
      location: [],
      brand: [],
      startKm: [APP_CONFIG.startKm],
      endKm: [APP_CONFIG.endKm],
      startYear: [APP_CONFIG.startYear],
      endYear: [APP_CONFIG.endYear],
      startPrice: [APP_CONFIG.startPrice],
      endPrice: [APP_CONFIG.endPrice],
      type: [],
      power: [],
      engine: [],
      transmission: [],
      fuel: [],
      color: [],
    });

    this.form.valueChanges.pipe(debounceTime(450)).subscribe(val => {
      console.table(val);
    });

    return this.form;
  }

  ngOnInit() {}
}
