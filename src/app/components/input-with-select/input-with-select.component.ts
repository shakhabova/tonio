import { CommonModule } from '@angular/common';
import { Component, input, output } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { NgSelectModule } from '@ng-select/ng-select';
import { getIconUrl } from '../../utils';

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
export class InputWithSelectComponent<T> {
  selectItems = input<T[] | null>([]);
  selectedItem = input<string>();
  inputValue = input<string>();
  bindLabel = input<string>('label');
  bindValue = input<string>('value');
  bindIcon = input<string>();

  selectChange = output<T>();
  selectedItemChange = output<string>();
  inputValueChange = output<string>();

  getIcon(code: string): string {
    return getIconUrl(code);
  }

  onSelectChange(item: T): void {
    this.selectChange.emit(item);
    this.selectedItemChange.emit(item[this.bindValue()]);
  }
}
