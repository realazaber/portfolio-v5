import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EasyUIModule } from '@azaber/ngeasy-ui';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-hero',
  standalone: true,
  imports: [CommonModule, EasyUIModule, RouterModule],
  templateUrl: './hero.component.html',
  styleUrl: './hero.component.scss',
})
export class HeroComponent {}
