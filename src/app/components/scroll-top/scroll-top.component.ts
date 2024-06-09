import { Component } from '@angular/core';
import { map, tap } from 'rxjs';
import { WindowScrolledService } from '../../services/window-scrolled.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-scroll-top',
  templateUrl: './scroll-top.component.html',
  styleUrls: ['./scroll-top.component.css'],
  standalone: true,
  imports: [CommonModule]
})
export class ScrollTopComponent {
  windowScrolled$ = this.windowScrolledService.windowScrolled$
    .pipe(
      map(scrolled => scrolled ? 'block' : 'none'),
    );

  constructor(private windowScrolledService: WindowScrolledService) {}
  
  scrollToTop() {
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }
}
