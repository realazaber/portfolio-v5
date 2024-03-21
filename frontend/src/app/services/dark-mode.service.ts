import { isPlatformBrowser } from '@angular/common';
import { Injectable, Signal, signal, WritableSignal } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class DarkModeService {
  darkOn: WritableSignal<boolean> = signal(false);
  toggleDiv: any = null;
  constructor() {}

  toggleDarkMode(darkModeElement: HTMLElement): void {
    this.darkOn.set(!this.darkOn());

    if (darkModeElement) {
      if (this.darkOn()) {
        darkModeElement.classList.add('dark');
        darkModeElement.classList.remove('light');
      } else {
        darkModeElement.classList.add('light');
        darkModeElement.classList.remove('dark');
      }
    }
  }

  getMode(): boolean {
    return this.darkOn();
  }
}
