import { Component } from '@angular/core';
import { HelpCardsComponent } from './help-cards/help-cards.component';
import { GoToHelpCenterComponent } from './go-to-help-center/go-to-help-center.component';

@Component({
  selector: 'app-help',
  standalone: true,
  imports: [
    HelpCardsComponent,
    GoToHelpCenterComponent
    
  ],
  templateUrl: './help.component.html',
  styleUrl: './help.component.css'
})
export class HelpComponent {

}
