import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatTooltipModule } from '@angular/material/tooltip';
import { NgOptimizedImage } from '@angular/common';

@Component({
  selector: 'al-car',
  standalone: true,
  imports: [
    CommonModule,
    MatCardModule,
    MatButtonModule,
    MatIconModule,
    MatTooltipModule,
    NgOptimizedImage
  ],
  templateUrl: './car.component.html',
  styles: [],
})
export class CarComponent {
  @Input() car: any;
}
