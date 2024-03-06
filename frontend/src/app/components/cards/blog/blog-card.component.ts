import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EasyUIModule } from '@azaber/ngeasy-ui';

@Component({
  selector: 'app-blog-card',
  standalone: true,
  imports: [CommonModule, EasyUIModule],
  templateUrl: './blog-card.component.html',
  styleUrl: './blog-card.component.scss',
})
export class BlogCardComponent {
  @Input() id: number = 0;
  @Input() title: string = 'title';
  @Input() content: string = 'content';
  @Input() featuredImgAlt: string = 'altTxt';
  @Input() featuredImgUrl: string = 'imgUrl';
  @Input() category: string = 'category';
  @Input() datePosted: string = 'date';

  getPostUrl(): string {
    return 'https://personal-blog-ten-bice.vercel.app/posts/' + this.id;
  }
}
