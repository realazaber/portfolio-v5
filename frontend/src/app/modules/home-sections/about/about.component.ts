import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EasyUIModule } from '@azaber/ngeasy-ui';
import { ContentService } from '../../../services/content.service';
import { IContent } from '../../../models/content';
import { TechComponent } from '../../../components/logos/tech/tech.component';

@Component({
  selector: 'app-about',
  standalone: true,
  imports: [CommonModule, EasyUIModule, TechComponent],
  templateUrl: './about.component.html',
  styleUrl: './about.component.scss',
})
export class AboutComponent implements OnInit {
  constructor(private contenService: ContentService) {}

  about: string = '';

  ngOnInit(): void {
    this.contenService.getContent(125).subscribe((data: IContent) => {
      this.about = data.acf.content;
    });
  }
}
