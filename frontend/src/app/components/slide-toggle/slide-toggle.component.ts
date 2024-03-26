import { Component, OnInit, signal, WritableSignal } from '@angular/core';
import { DarkModeService } from '../../services/dark-mode.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-slide-toggle',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './slide-toggle.component.html',
  styles: ``,
})
export class SlideToggleComponent implements OnInit {
  isDark: boolean = false;
  emoji: string = '';

  constructor(private darkMode: DarkModeService) {}

  toggleMode(): void {
    let toggleDiv: HTMLElement | null =
      window.document.getElementById('darkWrapper');
    if (toggleDiv) {
      this.darkMode.toggleDarkMode(toggleDiv);
      this.getClasses();
      this.isDark = !this.isDark;
    }
  }

  ngOnInit(): void {
    this.isDark = this.getMode();
    this.getClasses();
  }

  getMode(): boolean {
    return this.darkMode.getMode();
  }

  getClasses(): string {
    if (this.isDark) {
      //dark on
      return ' justify-start bg-secondary ';
    } else {
      //dark off
      return ' justify-end bg-black ';
    }
  }
}
