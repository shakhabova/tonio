import { AfterViewInit, Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { jsGlobe } from './js-globe.js';
import { HeaderComponent } from './components/header/header.component.js';

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
  title = 'tonio';

  ngAfterViewInit(): void {
    jsGlobe();
  }
}
