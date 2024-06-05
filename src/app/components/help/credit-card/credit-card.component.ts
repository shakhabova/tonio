import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { ReadyToStartComponent } from '../../home-page/ready-to-start/ready-to-start.component';

@Component({
  selector: 'app-credit-card',
  standalone: true,
  imports: [
    RouterModule,
    ReadyToStartComponent
  ],
  templateUrl: './credit-card.component.html',
  styleUrl: './credit-card.component.css'
})
export class CreditCardComponent {

}
