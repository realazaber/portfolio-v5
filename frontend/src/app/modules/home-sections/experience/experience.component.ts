import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { EasyUIModule } from '@azaber/ngeasy-ui';
import { ContentService } from '../../../services/content.service';
import { IContent } from '../../../models/content';
import { ExperienceService } from '../../../services/experience.service';
import { IExperience } from '../../../models/experience';
import { ExperienceCardComponent } from '../../../components/experience/experience.component';

@Component({
  selector: 'app-experience',
  standalone: true,
  imports: [CommonModule, EasyUIModule, ExperienceCardComponent],
  templateUrl: './experience.component.html',
  styles: ``,
})
export class ExperienceComponent implements OnInit {
  experience: string = '';
  experiences: IExperience[] | null = null;
  counter: number = 0;

  constructor(
    private contentService: ContentService,
    private experienceService: ExperienceService,
  ) {}

  ngOnInit(): void {
    this.contentService.getContent(126).subscribe((data: IContent) => {
      this.experience = data.acf.content;
    });

    this.experienceService.getExperiences().subscribe((data: IExperience[]) => {
      // Sort experiences in descending order by start_date (newest to oldest)
      this.experiences = data.sort((a, b) => {
        const dateA = new Date(a.acf.start_date);
        const dateB = new Date(b.acf.start_date);
        return dateB.getTime() - dateA.getTime(); // Descending order
      });

      // Trim experience descriptions to 120 characters
      this.experiences.forEach((exp) => {
        this.counter++;
        exp.acf.description =
          exp.acf.description.substring(0, 120).trim() + '...';
        exp.count = this.counter;
      });
    });
  }

  trackByFn(index: number, item: IExperience): number {
    return index;
  }
}
