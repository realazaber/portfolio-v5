import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EasyUIModule } from '@azaber/ngeasy-ui';
import { ContentService } from '../../../services/content.service';
import { IContent } from '../../../models/content';
import { TechComponent } from '../../../components/logos/tech/tech.component';
import { IbtnText } from '../../../models/btnText';

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

  btnTexts: IbtnText[] = [
    { tabNum: 1, text: '💻 Frontend' },
    { tabNum: 2, text: '🌐 Backend' },
    { tabNum: 3, text: '📝 Content Management Systems' },
    { tabNum: 4, text: '🔁 Dev Ops' },
    { tabNum: 5, text: '☁️ Cloud' },
  ];

  currentTab: number = 1;

  ngOnInit(): void {
    this.contenService.getContent(125).subscribe((data: IContent) => {
      this.about = data.acf.content;
    });
  }

  setTab(tabNum: number) {
    this.currentTab = tabNum;
  }
}
