import { Injectable, NgZone } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({providedIn: 'root'})
export class WindowScrolledService {
    public windowScrolled$: BehaviorSubject<boolean> = new BehaviorSubject(false);
    
    constructor(ngZone: NgZone) { 
        ngZone.runOutsideAngular(() => {
            window.addEventListener('scroll', () => {
                const windowScrolled = !!window.scrollY;
                if (this.windowScrolled$.getValue() !== windowScrolled) {
                    ngZone.run(() => this.windowScrolled$.next(windowScrolled));
                }
            });
        });
    }
}