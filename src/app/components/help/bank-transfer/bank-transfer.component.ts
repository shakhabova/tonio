import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { ReadyToStartComponent } from '../../home-page/ready-to-start/ready-to-start.component';

@Component({
  selector: 'app-bank-transfer',
  standalone: true,
  imports: [
    RouterModule,
    ReadyToStartComponent
  ],
  templateUrl: './bank-transfer.component.html',
  styleUrl: './bank-transfer.component.css'
})
export class BankTransferComponent {

}
