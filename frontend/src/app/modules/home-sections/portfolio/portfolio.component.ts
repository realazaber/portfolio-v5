import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EasyUIModule } from '@azaber/ngeasy-ui';
import { IProject } from '../../../models/project';
import { PortfolioService } from '../../../services/portfolio.service';
import { MainProjectComponent } from '../../../components/main-project/main-project.component';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-portfolio',
  standalone: true,
  imports: [CommonModule, EasyUIModule, MainProjectComponent, RouterModule],
  templateUrl: './portfolio.component.html',
  styleUrl: './portfolio.component.scss',
})
export class PortfolioComponent implements OnInit {
  projects: IProject[] = [];

  constructor(private portfolioService: PortfolioService) {}

  ngOnInit(): void {
    this.portfolioService.getProjects().subscribe((data: IProject[]) => {
      if (data) {
        data.forEach((element) => {
          if (element.acf.is_main_project == 'true') {
            this.projects.push(element);
          }
        });
      }
    });
  }
}
