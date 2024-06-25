import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { StepsToStartComponent } from './steps-to-start/steps-to-start.component';

@Component({
  selector: 'app-go-to-business',
  standalone: true,
  imports: [
    CommonModule,
    StepsToStartComponent
  ],
  templateUrl: './go-to-business.component.html',
  styleUrl: './go-to-business.component.css'
})
export class GoToBusinessComponent {

}
