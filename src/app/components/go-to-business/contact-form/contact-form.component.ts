import { Component, inject, signal } from '@angular/core';
import { COUNTRIES } from './constants';
import { CommonModule } from '@angular/common';
import { NgSelectComponent, NgSelectModule } from '@ng-select/ng-select';
import { FormsModule } from '@angular/forms';
import { finalize } from 'rxjs';
import { ContactService } from '../../../services/contact-api.service';

@Component({
  selector: 'app-contact-form',
  standalone: true,
  imports: [CommonModule, FormsModule, NgSelectModule],
  templateUrl: './contact-form.component.html',
  styleUrl: './contact-form.component.css',
})
export class ContactFormComponent {
  private contactApi = inject(ContactService);
  
  countries = COUNTRIES;

  name = '';
  surname = '';
  email = '';
  phone = '';
  message = '';
  company = '';
  country = 'United Kingdom';
  sendDisabled = signal(false);

  onSend(): void {
    const successToast = document.getElementById('successToast');
    const errorToast = document.getElementById('errorToast');

    this.sendDisabled.set(true);

    this.contactApi
      .sendForm({
        fullName: this.name + ' ' + this.surname,
        email: this.email,
        phone: this.phone,
        inquiry: this.message,
        company: this.company,
        country: this.country,
      })
      .pipe(finalize(() => this.sendDisabled.set(false)))
      .subscribe({
        next: () => {
          this.name = '';
          this.surname = '';
          this.email = '';
          this.phone = '';
          this.message = '';
          this.company = '';
          this.country = '';

          // @ts-ignore
          const toastBootstrap = bootstrap.Toast.getOrCreateInstance(successToast);
          toastBootstrap.show();
        },
        error: () => {
          // @ts-ignore
          const toastBootstrap = bootstrap.Toast.getOrCreateInstance(errorToast);
          toastBootstrap.show();
        },
      });
  }
}
