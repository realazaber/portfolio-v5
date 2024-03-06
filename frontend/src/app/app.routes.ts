import { Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { MoreProjectsComponent } from './pages/more-projects/more-projects.component';
import { SingleExperienceComponent } from './pages/single-experience/single-experience.component';
import { SingleProjectComponent } from './pages/single-project/single-project.component';

export const routes: Routes = [
  {
    path: '',
    pathMatch: 'full',
    component: HomeComponent,
  },
  {
    path: 'more-projects',
    pathMatch: 'full',
    component: MoreProjectsComponent,
  },
  {
    path: 'experience/:id',
    pathMatch: 'full',
    component: SingleExperienceComponent,
  },
  {
    path: 'project/:id',
    pathMatch: 'full',
    component: SingleProjectComponent,
  },
];
