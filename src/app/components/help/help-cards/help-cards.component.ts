import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { GoToHelpCenterComponent } from '../go-to-help-center/go-to-help-center.component';

@Component({
  selector: 'app-help-cards',
  standalone: true,
  imports: [
    HelpCardsComponent,
    RouterModule
    
  ],
  templateUrl: './help-cards.component.html',
  styleUrl: './help-cards.component.css'
})
export class HelpCardsComponent {

}
