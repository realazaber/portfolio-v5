import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeSectionsModule } from '../../modules/home-sections/home-sections.module';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule, HomeSectionsModule],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss',
})
export class HomeComponent {}
