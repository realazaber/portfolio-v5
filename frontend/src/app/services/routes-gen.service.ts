import { Injectable } from '@angular/core';
import { PortfolioService } from './portfolio.service';
import { ExperienceService } from './experience.service';
import { IProject } from '../models/project';
import { IExperience } from '../models/experience';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class RoutesGenService {
  constructor(
    private portfolioService: PortfolioService,
    private experienceService: ExperienceService,
  ) {}

  getRoutes(): string[] {
    const routes = [];

    routes.push('/');
    routes.push('/more-projects');

    this.portfolioService.getProjects().subscribe((projects: IProject[]) => {
      projects.forEach((project) => routes.push(`/project/${project.id}`));
    });

    this.experienceService
      .getExperiences()
      .subscribe((experiences: IExperience[]) => {
        experiences.forEach((experience: IExperience) =>
          routes.push(`/experience/${experience.id}`),
        );
      });

    return routes;
  }
}
