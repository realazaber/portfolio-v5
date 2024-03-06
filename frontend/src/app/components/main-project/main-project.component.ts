import { Component, Input } from '@angular/core';
import { IProject } from '../../models/project';
import { EasyUIModule } from '@azaber/ngeasy-ui';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-main-project',
  standalone: true,
  imports: [EasyUIModule, RouterModule],
  templateUrl: './main-project.component.html',
  styles: ``,
})
export class MainProjectComponent {
  @Input() project: IProject | null = null;
}
