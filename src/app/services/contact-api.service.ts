import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, delay, of, throwError } from 'rxjs';

export interface ContactFormModel {
  fullName: string;
  email: string;
  phone: string;
  country?: string;
  company?: string;
  inquiry: string;
}

@Injectable({providedIn: 'root'})
export class ContactService {
  constructor(private httpsClient: HttpClient) { }
  
  sendForm(form: ContactFormModel): Observable<void> {
    return this.httpsClient.post<void>('https://tonio.world/api/contact', form);
    // return of(undefined);
  }
}