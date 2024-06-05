import { CommonModule } from '@angular/common';
import { Component, input, output } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { NgSelectModule } from '@ng-select/ng-select';
import { getIconUrl } from '../../utils';


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
export class SelectComponent<T> {
  items = input<T[] | null>([]);
  selected = input<string | null>();
  bindLabel = input<string>('label');
  bindValue = input<string>('value');
  bindIcon = input<string>()

  select = output<T>();
  selectedChange = output<string>();

  getIcon(code: string): string {
    return getIconUrl(code);
  }

  onChange(item: T): void {
    this.select.emit(item);
    this.selectedChange.emit(item[this.bindValue()]);
  }
}
