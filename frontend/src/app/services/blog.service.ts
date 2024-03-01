import { Injectable } from '@angular/core';
import { IBlog } from '../models/blog';
import { HttpClient } from '@angular/common/http';
import { blogUrl } from '../utils/baseUrl';

@Injectable({
  providedIn: 'root',
})
export class BlogService {
  constructor(private http: HttpClient) {}

  blogPosts: IBlog[] = [];

  getPosts(postLimit: number): IBlog[] {
    this.http.get<any>(blogUrl + '/posts').subscribe((data: any) => {
      if (data.length >= postLimit) {
        for (let i = 0; i < postLimit; i++) {
          let newPost: IBlog = {
            id: data[i].id,
            title: data[i].title.rendered,
            content: data[i].content.rendered.substring(0, 120),
            featuredImgAlt: data[i].title.rendered,
            featuredImgUrl: data[i].x_featured_media_original,
            category: data[i].x_categories,
            datePosted: data[i].x_date,
          };

          this.blogPosts.push(newPost);
        }
      } else {
        console.log('Too high post limit');
      }
    });

    return this.blogPosts;
  }
}
