import { CommonModule } from '@angular/common';
import { Component, inject, signal } from '@angular/core';
import { NavigationEnd, Router, RouterModule } from '@angular/router';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './header.component.html',
  styleUrl: './header.component.css',
})
export class HeaderComponent {
  private router = inject(Router);

  mobileMenuOpened = signal(false);
  isOnBusiness = signal(false);

  public ngOnInit(): void {
    this.router.events.subscribe((event) => {
      if (event instanceof NavigationEnd) {
        this.mobileMenuOpened.set(false);
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
