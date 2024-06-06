import { AfterViewInit, Component, inject, signal } from '@angular/core';
import { NavigationEnd, Router, RouterOutlet } from '@angular/router';
import { jsGlobe } from './js-globe.js';
import { HeaderComponent } from './components/header/header.component.js';
import { filter } from 'rxjs';
import { FooterComponent } from "./components/footer/footer.component";

@Component({
    selector: 'app-root',
    standalone: true,
    templateUrl: './app.component.html',
    styleUrl: './app.component.css',
    imports: [
        RouterOutlet,
        HeaderComponent,
        FooterComponent
    ]
})
export class AppComponent implements AfterViewInit {
  private router = inject(Router);
  title = 'tonio';
  displayGlobe = signal(false);
  urlsWithGlobe = ['track-transfer', 'contact-us',  'find-location', 'help']

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
