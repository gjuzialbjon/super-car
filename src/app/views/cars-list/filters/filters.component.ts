import {
  ChangeDetectionStrategy,
  Component,
  Input,
  OnDestroy,
  OnInit,
} from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule, UntypedFormGroup } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatTooltipModule } from '@angular/material/tooltip';
import { MatInputModule } from '@angular/material/input';
import { APP_CONFIG, BRAND_OPTIONS, LOCATION_OPTIONS } from '@core/config';
import { DropdownComponent } from '../../components/dropdown/dropdown.component';
import { RangeComponent } from '../../components/range/range.component';
import { MatExpansionModule } from '@angular/material/expansion';
import { ColorsComponent } from '../../components/colors/colors.component';

@Component({
  selector: 'al-filters',
  standalone: true,
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    MatButtonModule,
    MatIconModule,
    MatTooltipModule,
    MatInputModule,
    DropdownComponent,
    RangeComponent,
    MatExpansionModule,
    ColorsComponent,
  ],
  templateUrl: './filters.component.html',
  styles: [],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class FiltersComponent implements OnInit, OnDestroy {
  @Input() form!: UntypedFormGroup;
  config = APP_CONFIG;

  options = {
    locations: LOCATION_OPTIONS,
    brands: BRAND_OPTIONS,
  };

  constructor() {}

  ngOnInit(): void {}

  ngOnDestroy(): void {}
}
