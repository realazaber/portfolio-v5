import { Component, OnInit } from '@angular/core';
import { IExperience } from '../../models/experience';
import { ExperienceService } from '../../services/experience.service';
import { ActivatedRoute } from '@angular/router';
import { EasyUIModule } from '@azaber/ngeasy-ui';
import { LoadingContentComponent } from '../../components/loading-content/loading-content.component';
import { Meta } from '@angular/platform-browser';

@Component({
  selector: 'app-single-experience',
  standalone: true,
  imports: [EasyUIModule, LoadingContentComponent],
  templateUrl: './single-experience.component.html',
  styles: ``,
})
export class SingleExperienceComponent implements OnInit {
  experience: IExperience | null = null;

  constructor(
    private experienceService: ExperienceService,
    private activatedRoute: ActivatedRoute,
    private meta: Meta,
  ) {}

  ngOnInit(): void {
    const tmpId: string | null =
      this.activatedRoute.snapshot.paramMap.get('id');
    if (tmpId) {
      const id: number = parseInt(tmpId);
      this.experienceService
        .getExperience(id)
        .subscribe((data: IExperience) => {
          this.experience = data;
          this.meta.updateTag({
            name: 'title',
            content: data.acf.firm,
          });

          this.meta.updateTag({
            name: 'description',
            content: data.acf.description,
          });
        });
    }
  }
}
