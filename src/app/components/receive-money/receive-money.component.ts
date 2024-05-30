import { Component, HostBinding, Input, input } from '@angular/core';

@Component({
  selector: 'app-receive-money',
  standalone: true,
  imports: [],
  templateUrl: './receive-money.component.html',
  styleUrl: './receive-money.component.css'
})
export class ReceiveMoneyComponent {
  @HostBinding('class.row')
  @Input()
  isRow: boolean = false;
}
