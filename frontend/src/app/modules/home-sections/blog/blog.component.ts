import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BlogService } from '../../../services/blog.service';
import { IBlog } from '../../../models/blog';
import { BlogCardComponent } from '../../../components/cards/blog/blog-card.component';
import { EasyUIModule } from '@azaber/ngeasy-ui';

@Component({
  selector: 'app-blog',
  standalone: true,
  imports: [CommonModule, BlogCardComponent, EasyUIModule],
  templateUrl: './blog.component.html',
  styleUrl: './blog.component.scss',
})
export class BlogComponent implements OnInit {
  constructor(private blogService: BlogService) {}

  posts: IBlog[] = [];

  ngOnInit(): void {
    this.posts = this.blogService.getPosts(3);
  }
}
