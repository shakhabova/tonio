import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { ReadyToStartComponent } from '../../home-page/ready-to-start/ready-to-start.component';

@Component({
  selector: 'app-cash-pickup',
  standalone: true,
  imports: [
    RouterModule,
    ReadyToStartComponent
  ],
  templateUrl: './cash-pickup.component.html',
  styleUrl: './cash-pickup.component.css'
})
export class CashPickupComponent {

}
