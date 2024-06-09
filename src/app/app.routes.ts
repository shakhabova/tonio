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
import { HelpCenterComponent } from './components/help/help-center/help-center.component';
import { PrivacyPolicyComponent } from './components/privacy-policy/privacy-policy.component';
import { BlogComponent } from './components/blog/blog.component';
import { TermsAndConditionsComponent } from './components/terms-and-conditions/terms-and-conditions.component';
import { BlogOneComponent } from './components/blog/blog-one/blog-one.component';
import { BlogTwoComponent } from './components/blog/blog-two/blog-two.component';

export const routes: Routes = [
  
  { path: '', component:HomePageComponent , title: 'Tonio' },
  { path: 'track-transfer', component:TrackATransferComponent, title: 'Track a transfer'},
  { path: 'contact-us', component: ContactUsComponent, title: 'Contact Us'},
  { path: 'about-us', component: AboutUsComponent, title: 'About Us'},
  { path: 'find-location', component: FindLocationComponent, title: 'Find a Location' },
  { path: 'help', component: HelpComponent, title: 'Help'},
  { path: 'help/cash-pickup', component: CashPickupComponent, title: 'Cash pickup'},
  { path: 'help/bank-transfer', component: BankTransferComponent, title: 'Bank transfer'},
  { path: 'help/credit-card', component: CreditCardComponent, title: 'Credit/Debit card'},
  { path: 'help-center', component: HelpCenterComponent, title: 'Help center'},
  { path: 'privacy-policy', component: PrivacyPolicyComponent, title: 'Privacy Policy'},
  { path: 'blog', component:BlogComponent, title: 'Blog'},
  { path: 'terms-and-conditions', component: TermsAndConditionsComponent, title: 'Terms and Conditions'},
  { path: 'blog/blog-one', component: BlogOneComponent, title: 'The Evolution of Money Transfers'},
  { path: 'blog/blog-two', component:BlogTwoComponent, title: 'Top 5 Benefits of Using Tonio'},
  { path: 'blog/blog-three', component:BlogTwoComponent, title: 'Understanding the Future of Open Banking and Its Impact on Money Transfers'}
];
