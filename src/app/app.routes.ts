import { Routes } from '@angular/router';
import { HomePageComponent } from './components/home-page/home-page.component';
import { TrackATransferComponent } from './components/track-a-transfer/track-a-transfer.component';
import { ContactUsComponent } from './components/contact-us/contact-us.component';
import { AboutUsComponent } from './components/about-us/about-us.component';
import { FindLocationComponent } from './components/find-location/find-location.component';
import { HelpComponent } from './components/help/help.component';
import { CashPickupComponent } from './components/help/cash-pickup/cash-pickup.component';
import { BankTransferComponent } from './components/help/bank-transfer/bank-transfer.component';
import { CreditCardComponent } from './components/help/credit-card/credit-card.component';

export const routes: Routes = [
  
  { path: '', component:HomePageComponent , title: 'Tonio' },
  { path: 'track-transfer', component:TrackATransferComponent, title: 'Track a transfer'},
  { path: 'contact-us', component: ContactUsComponent, title: 'Contact Us'},
  { path: 'about-us', component: AboutUsComponent, title: 'About Us'},
  { path: 'find-location', component: FindLocationComponent, title: 'Find a Location' },
  { path: 'help', component: HelpComponent, title: 'Help'},
  { path: 'cash-pickup', component: CashPickupComponent, title: 'Cash pickup'},
  { path: 'bank-transfer', component: BankTransferComponent, title: 'Bank transfer'},
  { path: 'credit-card', component: CreditCardComponent, title: 'Credit/Debit card'}
];
