import { Component } from '@angular/core';
import { ReadyToStartComponent } from '../home-page/ready-to-start/ready-to-start.component';

@Component({
  selector: 'app-track-a-transfer',
  standalone: true,
  imports: [
    ReadyToStartComponent
  ],
  templateUrl: './track-a-transfer.component.html',
  styleUrl: './track-a-transfer.component.css'
})
export class TrackATransferComponent {

}
