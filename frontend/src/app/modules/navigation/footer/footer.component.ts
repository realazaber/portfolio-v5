import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LogoNav } from '../../../components/logos/nav/nav.component';
import { RouterModule } from '@angular/router';
import { EasyUIModule } from '@azaber/ngeasy-ui';
import { RoutesGenService } from '../../../services/routes-gen.service';

@Component({
  selector: 'app-footer',
  standalone: true,
  imports: [CommonModule, LogoNav, RouterModule, EasyUIModule],
  templateUrl: './footer.component.html',
  styleUrl: './footer.component.scss',
})
export class FooterComponent implements OnInit {
  currentYear: number = new Date().getFullYear();
  routes: string[] = [];

  constructor(private routesGen: RoutesGenService) {}

  genRoutes(): void {
    this.routes = this.routesGen.getRoutes();
  }

  ngOnInit(): void {
    this.genRoutes();
  }
}
