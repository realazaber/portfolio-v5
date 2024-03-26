import { Component } from '@angular/core';
import { DarkModeService } from '../../services/dark-mode.service';

import { OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-mode-toggle',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './mode-toggle.component.html',
  styles: ``,
})
export class ModeToggleComponent implements OnInit {
  classes: string = '';
  label: string = '';

  constructor(private darkMode: DarkModeService) {}

  ngOnInit(): void {
    this.getClasses();
  }

  toggleMode(): void {
    let toggleDiv: HTMLElement | null =
      window.document.getElementById('darkWrapper');
    if (toggleDiv) {
      this.darkMode.toggleDarkMode(toggleDiv);
    }
    this.getClasses();
  }

  getClasses(): string {
    if (this.darkMode.getMode() == true) {
      //dark
      this.classes = 'bg-white text-black ';
    } else {
      //light
      this.classes = 'bg-black text-white ';
    }
    return this.classes;
  }

  getLabel(): string {
    if (this.darkMode.getMode() == true) {
      this.label = 'Light ☀️';
    } else {
      this.label = 'Dark 🌙';
    }
    return this.label;
  }
}
