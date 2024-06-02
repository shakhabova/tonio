import { CommonModule } from '@angular/common';
import { Component, input, output } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { NgSelectModule } from '@ng-select/ng-select';
import { SelectItem } from '../select/select.component';

@Component({
  selector: 'app-input-with-select',
  standalone: true,
  imports: [
    CommonModule,
    NgSelectModule,
    FormsModule,
  ],
  templateUrl: './input-with-select.component.html',
  styleUrl: './input-with-select.component.css'
})
export class InputWithSelectComponent {
  selectItems = input<SelectItem[]>([]);
  selectedItem = input<string>();
  inputValue = input<string>();

  selectChange = output<SelectItem>();
  inputValueChange = output<string>();
}
