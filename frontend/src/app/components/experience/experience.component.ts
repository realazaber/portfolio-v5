import { Component, Input } from '@angular/core';
import { IExperience } from '../../models/experience';
import { EasyUIModule } from '@azaber/ngeasy-ui';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-experience-card',
  standalone: true,
  imports: [EasyUIModule, RouterModule],
  templateUrl: './experience.component.html',
  styles: ``,
})
export class ExperienceCardComponent {
  @Input() experience: IExperience | null = null;
}
