import { Routes } from '@angular/router';
import { HomePageComponent } from './components/home-page/home-page.component';
import { TrackATransferComponent } from './components/track-a-transfer/track-a-transfer.component';
import { ContactUsComponent } from './components/contact-us/contact-us.component';
import { AboutUsComponent } from './components/about-us/about-us.component';

export const routes: Routes = [
  
  { path: '', component:HomePageComponent , title: 'Tonio' },
  { path: 'track-transfer', component:TrackATransferComponent, title: 'Track a transfer'},
  { path: 'contact-us', component: ContactUsComponent, title: 'Contact Us'},
  { path: 'about-us', component: AboutUsComponent, title: 'About Us'}
];
