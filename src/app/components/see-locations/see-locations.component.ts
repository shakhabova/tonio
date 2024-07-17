import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { AgentsListComponent } from './agents-list/agents-list.component';

@Component({
  selector: 'app-see-locations',
  standalone: true,
  imports: [
    CommonModule,
    AgentsListComponent
  ],
  templateUrl: './see-locations.component.html',
  styleUrl: './see-locations.component.css'
})
export class SeeLocationsComponent {

}
