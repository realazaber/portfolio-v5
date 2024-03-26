import { Component } from '@angular/core';
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
}
