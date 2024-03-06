import { Component, Input } from '@angular/core';
import { IProject } from '../../models/project';
import { EasyUIModule } from '@azaber/ngeasy-ui';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-other-project',
  standalone: true,
  imports: [EasyUIModule, RouterModule],
  templateUrl: './other-project.component.html',
  styles: ``,
})
export class OtherProjectComponent {
  @Input() project: IProject | null = null;
}
