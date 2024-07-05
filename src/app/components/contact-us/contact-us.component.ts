import { CommonModule } from '@angular/common';
import { Component, inject, signal } from '@angular/core';
import { InputWithSelectComponent } from '../input-with-select/input-with-select.component';
import { FormsModule } from '@angular/forms';
import { ContactService } from '../../services/contact-api.service';
import { finalize } from 'rxjs';

@Component({
  selector: 'app-contact-us',
  standalone: true,
  imports: [CommonModule, FormsModule, InputWithSelectComponent],
  templateUrl: './contact-us.component.html',
  styleUrl: './contact-us.component.css',
})
export class ContactUsComponent {
  private contactApi = inject(ContactService);

  fullName = '';
  email = '';
  phone = '';
  message = '';

  sendDisabled = signal(false);

  onSend(): void {
    const successToast = document.getElementById('successToast');
    const errorToast = document.getElementById('errorToast');

    this.sendDisabled.set(true);

    this.contactApi
      .sendForm({
        fullName: this.fullName,
        email: this.email,
        phone: this.phone,
        inquiry: this.message,
      })
      .pipe(finalize(() => this.sendDisabled.set(false)))
      .subscribe({
        next: () => {
          this.fullName = '';
          this.email = '';
          this.phone = '';
          this.message = '';

          // @ts-ignore
          const toastBootstrap = bootstrap.Toast.getOrCreateInstance(successToast);
          toastBootstrap.show();
        },
        error: () => {
          // @ts-ignore
          const toastBootstrap =bootstrap.Toast.getOrCreateInstance(errorToast);
          toastBootstrap.show();
        },
      });
  }
}
