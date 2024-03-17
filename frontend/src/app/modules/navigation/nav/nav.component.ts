import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LogoNav } from '../../../components/logos/nav/nav.component';
import { EasyUIModule } from '@azaber/ngeasy-ui';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-nav',
  standalone: true,
  imports: [CommonModule, LogoNav, EasyUIModule, RouterModule],
  templateUrl: './nav.component.html',
  styleUrl: './nav.component.scss',
})
export class DesktopnavComponent {
  showMobile: boolean = false;

  toggleMobileMenu(): void {
    this.showMobile = !this.showMobile;
  }
}
