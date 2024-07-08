import { AfterViewInit, Component, NgZone, effect, inject, signal } from '@angular/core';
import { ActivatedRoute, NavigationEnd, Router, RouterOutlet } from '@angular/router';
import { jsGlobe } from './js-globe.js';
import { HeaderComponent } from './components/header/header.component.js';
import { filter } from 'rxjs';
import { FooterComponent } from "./components/footer/footer.component";
import { WindowScrolledService } from './services/window-scrolled.service.js';
import { ScrollTopComponent } from './components/scroll-top/scroll-top.component.js';
import { ToastComponent } from "./components/toast/toast.component";

@Component({
    selector: 'app-root',
    standalone: true,
    templateUrl: './app.component.html',
    styleUrl: './app.component.css',
    imports: [
        RouterOutlet,
        HeaderComponent,
        FooterComponent,
        ScrollTopComponent,
        ToastComponent
    ]
})
export class AppComponent implements AfterViewInit {
  private router = inject(Router);
  private route = inject(ActivatedRoute);
  title = 'tonio';
  displayGlobe = signal(false);
  urlsWithGlobe = [ 'contact-us',  'find-location', 'help', 'blog'];
  isBussinessPage = signal(this.checkIsBussinessPage);
  forIframe = signal(false);

  constructor() {
    effect(() => {
      this.forIframe() ? document.body.classList.add('for-iframe') : document.body.classList.remove('for-iframe');
    });
  }

  ngAfterViewInit(): void {
    this.router.events
      .pipe(
        filter(ev => ev instanceof NavigationEnd)
      )
      .subscribe(() => {
        if (this.router.url === '/' || this.urlsWithGlobe.some(url => this.router.isActive(url, { queryParams: 'ignored', fragment: 'ignored', matrixParams: 'ignored', paths: 'exact' }))) {
          if (!this.displayGlobe()) {
            requestAnimationFrame(() => jsGlobe());
          }
          this.displayGlobe.set(true);
        } else {
          this.displayGlobe.set(false);
        }

        if (this.checkIsBussinessPage) {
          this.isBussinessPage.set(true);
        } else {
          this.isBussinessPage.set(false);
        }
      });

      this.route.queryParamMap.subscribe(queryParams => {
        if (queryParams.has('forIframe')) {
          this.forIframe.set(true);
        } else {
          this.forIframe.set(false);
        }
      });
  }

  private get checkIsBussinessPage(): boolean {
    return this.router.url.endsWith('go-to-business');
  }
}
