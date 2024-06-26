import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { StepsToStartComponent } from './steps-to-start/steps-to-start.component';
import { ContactFormComponent } from './contact-form/contact-form.component';
import { ReadyToStartComponent } from '../home-page/ready-to-start/ready-to-start.component';
import { CollaborateComponent } from './collaborate/collaborate.component';

@Component({
  selector: 'app-go-to-business',
  standalone: true,
  imports: [
    CommonModule,
    StepsToStartComponent,
    ContactFormComponent,
    ReadyToStartComponent,
    CollaborateComponent
  ],
  templateUrl: './go-to-business.component.html',
  styleUrl: './go-to-business.component.css'
})
export class GoToBusinessComponent {

}
