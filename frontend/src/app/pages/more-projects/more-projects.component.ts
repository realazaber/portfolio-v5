import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PortfolioService } from '../../services/portfolio.service';
import { IProject } from '../../models/project';
import { EasyUIModule } from '@azaber/ngeasy-ui';
import { RouterModule } from '@angular/router';
import { OtherProjectComponent } from '../../components/other-project/other-project.component';
import { ITech } from '../../models/tech';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-more-projects',
  standalone: true,
  imports: [
    CommonModule,
    EasyUIModule,
    RouterModule,
    OtherProjectComponent,
    FormsModule,
  ],
  templateUrl: './more-projects.component.html',
  styleUrl: './more-projects.component.scss',
})
export class MoreProjectsComponent implements OnInit {
  projects: IProject[] = [];
  categories: string[] = [];
  isLoading: boolean = true;

  chosenCategory: string = '';

  constructor(private portfolioService: PortfolioService) {}

  ngOnInit(): void {
    this.portfolioService.getProjects().subscribe((data: IProject[]) => {
      this.projects = data;
      data.forEach((element: IProject) => {
        element.acf.tech.forEach((tech: ITech) => {
          if (!this.categories.includes(tech.name)) {
            this.categories.push(tech.name);
          }
        });
      });
    });
    this.isLoading = false;
  }

  filterProjects(): void {
    let uniqueProjects = new Set<IProject>();

    this.portfolioService.getProjects().subscribe((data: IProject[]) => {
      data.forEach((project: IProject) => {
        project.acf.tech.forEach((tech: ITech) => {
          if (
            tech.name.toLowerCase().includes(this.chosenCategory.toLowerCase())
          ) {
            if (!uniqueProjects.has(project)) {
              uniqueProjects.add(project);
              console.log(
                `${tech.name} contains ${this.chosenCategory} Added ${project.acf.title}`,
              );
            }
          }
        });
      });

      this.projects = Array.from(uniqueProjects);
    });
  }
}
