import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { InputWithSelectComponent } from '../input-with-select/input-with-select.component';

@Component({
  selector: 'app-contact-us',
  standalone: true,
  imports: [
    CommonModule,
    InputWithSelectComponent,
  ],
  templateUrl: './contact-us.component.html',
  styleUrl: './contact-us.component.css'
})
export class ContactUsComponent {

}
