import { Component } from '@angular/core';
import { ReadyToStartComponent } from "../../home-page/ready-to-start/ready-to-start.component";

@Component({
    selector: 'app-help-center',
    standalone: true,
    templateUrl: './help-center.component.html',
    styleUrl: './help-center.component.css',
    imports: [ReadyToStartComponent]
})
export class HelpCenterComponent {

}
