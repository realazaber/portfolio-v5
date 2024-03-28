import { Component, HostListener } from '@angular/core';
import { CommonModule, Location } from '@angular/common';
import { LogoNav } from '../../../components/logos/nav/nav.component';
import { EasyUIModule } from '@azaber/ngeasy-ui';
import { Router, RouterModule } from '@angular/router';
import { ModeToggleComponent } from '../../../components/mode-toggle/mode-toggle.component';
import { DarkModeService } from '../../../services/dark-mode.service';

@Component({
  selector: 'app-nav',
  standalone: true,
  imports: [
    CommonModule,
    LogoNav,
    EasyUIModule,
    RouterModule,
    ModeToggleComponent,
  ],
  templateUrl: './nav.component.html',
  styleUrl: './nav.component.scss',
})
export class DesktopnavComponent {
  showMobile: boolean = false;
  classes: string = '';

  toggleMobileMenu(): void {
    this.showMobile = !this.showMobile;
  }

  constructor(
    private router: Router,
    private location: Location,
    private darkMode: DarkModeService,
  ) {}

  @HostListener('window:scroll', ['$event'])
  scrollspy(event: Event) {
    if (window.screen.width > 640) {
      if (window.scrollY > 540 && this.location.path() == '/') {
        this.classes = ' sm:rounded-lg sm:shadow-md mx-3 ';
        if (this.darkMode.getMode()) {
          this.classes += ' bg-darkbg ';
        } else {
          this.classes += ' bg-white ';
        }
      } else if (window.scrollY > 40 && this.location.path() != '/') {
        this.classes = ' sm:rounded-lg sm:shadow-md mx-3 ';
        if (this.darkMode.getMode()) {
          this.classes += ' bg-darkbg ';
        } else {
          this.classes += ' bg-white ';
        }
      } else {
        this.classes = '';
      }
    }
  }

  routeHome(): void {
    if (this.location.path() != '/') {
      this.router.navigate(['/']);
    }
  }
}
