import { Component } from '@angular/core';
import {
  CommonModule,
  HashLocationStrategy,
  LocationStrategy,
} from '@angular/common';
import { RouterModule, RouterOutlet } from '@angular/router';
import { NavigationModule } from './modules/navigation/navigation.module';

import { EasyUIModule } from '@azaber/ngeasy-ui';

import { SocialsComponent } from './components/socials/socials.component';

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
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent {
  title: string = 'Azaber portfolio';
}
