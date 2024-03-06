import { Component, OnInit } from '@angular/core';
import { IProject } from '../../models/project';
import { PortfolioService } from '../../services/portfolio.service';
import { ActivatedRoute } from '@angular/router';
import { EasyUIModule } from '@azaber/ngeasy-ui';

@Component({
  selector: 'app-single-project',
  standalone: true,
  imports: [EasyUIModule],
  templateUrl: './single-project.component.html',
  styles: ``,
})
export class SingleProjectComponent implements OnInit {
  project: IProject | null = null;

  constructor(
    private portfolioService: PortfolioService,
    private activatedRoute: ActivatedRoute,
  ) {}

  ngOnInit(): void {
    const tmpId: string | null =
      this.activatedRoute.snapshot.paramMap.get('id');
    if (tmpId) {
      const id: number = parseInt(tmpId);
      this.portfolioService.getProject(id).subscribe((data: IProject) => {
        this.project = data;
      });
    }
  }
}
