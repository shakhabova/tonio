import { CommonModule } from '@angular/common';
import { Component, inject, signal } from '@angular/core';
import { NavigationEnd, Router, RouterModule } from '@angular/router';
import { PrivacyPolicyComponent } from '../privacy-policy/privacy-policy.component';

@Component({
  selector: 'app-footer',
  standalone: true,
  imports: [CommonModule, RouterModule, PrivacyPolicyComponent, RouterModule],
  templateUrl: './footer.component.html',
  styleUrl: './footer.component.css',
})
export class FooterComponent {
  router = inject(Router);
  isOnBusiness = signal(false);
  ngOnInit() {
    this.router.events.subscribe((event) => {
      if (event instanceof NavigationEnd) {
        const isOnBusiness = this.router.isActive('go-to-business', {
          fragment: 'ignored',
          queryParams: 'ignored',
          matrixParams: 'ignored',
          paths: 'exact',
        });
        this.isOnBusiness.set(isOnBusiness);
      }
    });
  }
}
