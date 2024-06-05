import { AfterViewInit, Component, inject, signal } from '@angular/core';
import { NavigationEnd, Router, RouterOutlet } from '@angular/router';
import { jsGlobe } from './js-globe.js';
import { HeaderComponent } from './components/header/header.component.js';
import { filter } from 'rxjs';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    RouterOutlet,
    HeaderComponent,
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent implements AfterViewInit {
  private router = inject(Router);
  title = 'tonio';
  displayGlobe = signal(false);
  urlsWithGlobe = ['track-transfer', 'contact-us', 'about-us',  'find-location', 'help']

  ngAfterViewInit(): void {
    this.router.events
      .pipe(
        filter(ev => ev instanceof NavigationEnd)
      )
      .subscribe(() => {
        if (this.router.url === '/' || this.urlsWithGlobe.some(url => this.router.url.endsWith(url))) {
          if (!this.displayGlobe()) {
            requestAnimationFrame(() => jsGlobe());
          }
          this.displayGlobe.set(true);
        } else {
          this.displayGlobe.set(false);
        }
      })
  }
}
