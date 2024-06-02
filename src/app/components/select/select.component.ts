import { CommonModule } from '@angular/common';
import { Component, input, output } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { NgSelectModule } from '@ng-select/ng-select';

export interface SelectItem<T = string> {
  label: string;
  value: T;
  icon?: string;
}

@Component({
  selector: 'app-select',
  standalone: true,
  imports: [
    CommonModule,
    NgSelectModule,
    FormsModule,
  ],
  templateUrl: './select.component.html',
  styleUrl: './select.component.css'
})
export class SelectComponent {
  items = input<SelectItem[]>([]);
  selected = input<string>();

  select = output<SelectItem>();
}
