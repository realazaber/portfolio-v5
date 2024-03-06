import { Component, OnInit } from '@angular/core';
import { IExperience } from '../../models/experience';
import { ExperienceService } from '../../services/experience.service';
import { ActivatedRoute } from '@angular/router';
import { EasyUIModule } from '@azaber/ngeasy-ui';

@Component({
  selector: 'app-single-experience',
  standalone: true,
  imports: [EasyUIModule],
  templateUrl: './single-experience.component.html',
  styles: ``,
})
export class SingleExperienceComponent implements OnInit {
  experience: IExperience | null = null;

  constructor(
    private experienceService: ExperienceService,
    private activatedRoute: ActivatedRoute,
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
        });
    }
  }
}
