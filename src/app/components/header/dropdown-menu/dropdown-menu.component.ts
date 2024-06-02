import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component, input } from '@angular/core';

export interface DropdownMenuItem {
  label: string;
  routerLink: string;
}

@Component({
  selector: 'app-dropdown-menu',
  standalone: true,
  imports: [
    CommonModule,
  ],
  templateUrl: './dropdown-menu.component.html',
  styleUrl: './dropdown-menu.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class DropdownMenuComponent {
  header = input.required<string>();
  items = input.required<DropdownMenuItem[]>();
}
