import { Component, HostListener } from '@angular/core';
import { CommonModule, Location } from '@angular/common';
import { LogoNav } from '../../../components/logos/nav/nav.component';
import { EasyUIModule } from '@azaber/ngeasy-ui';
import { Router, RouterModule } from '@angular/router';
import { ModeToggleComponent } from '../../../components/mode-toggle/mode-toggle.component';

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
  ) {}

  routeHome(): void {
    if (this.location.path() != '/') {
      this.router.navigate(['/']);
    }
  }

  @HostListener('window:scroll', ['$event'])
  trackScroll() {
    console.log(
      'Current scroll position:',
      window.scrollY || document.documentElement.scrollTop,
    );

    if (window.scrollY > 540 && this.location.path() == '/') {
      this.classes = ' sm:bg-white sm:rounded-lg sm:shadow-md mx-3 ';
    } else if (window.scrollY > 40) {
      this.classes = ' sm:bg-white sm:rounded-lg sm:shadow-md mx-3 ';
    } else {
      this.classes = '';
    }
  }
}
