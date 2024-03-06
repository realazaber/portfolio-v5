import { Injectable } from '@angular/core';
import { IContent } from '../models/content';
import { portfolioUrl } from '../utils/baseUrl';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class ContentService {
  constructor(private http: HttpClient) {}

  getContent(id: number): Observable<IContent> {
    return this.http.get<IContent>(portfolioUrl + '/content-page/' + id);
  }
}
