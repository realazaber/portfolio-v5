import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, RouterOutlet } from '@angular/router';
import { NavigationModule } from './modules/navigation/navigation.module';
import { EasyUIModule } from '@azaber/ngeasy-ui';
import { SocialsComponent } from './components/socials/socials.component';
import { ModeToggleComponent } from './components/mode-toggle/mode-toggle.component';
import { SlideToggleComponent } from './components/slide-toggle/slide-toggle.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    CommonModule,
    RouterOutlet,
    RouterModule,
    NavigationModule,
    EasyUIModule,
    SocialsComponent,
    ModeToggleComponent,
    SlideToggleComponent,
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent {}
