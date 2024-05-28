import { Routes } from '@angular/router';
import { HomePageComponent } from './components/home-page/home-page.component';
import { TrackATransferComponent } from './components/track-a-transfer/track-a-transfer.component';

export const routes: Routes = [
  
  { path: '', component:HomePageComponent , title: 'Tonio' },
  { path: 'track-transfer', component:TrackATransferComponent, title: 'Track a transfer'}
];
