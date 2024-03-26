import { Component, OnInit } from '@angular/core';
import { IProject } from '../../models/project';
import { PortfolioService } from '../../services/portfolio.service';
import { ActivatedRoute } from '@angular/router';
import { EasyUIModule } from '@azaber/ngeasy-ui';
import { LoadingContentComponent } from '../../components/loading-content/loading-content.component';

@Component({
  selector: 'app-single-project',
  standalone: true,
  imports: [EasyUIModule, LoadingContentComponent],
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
