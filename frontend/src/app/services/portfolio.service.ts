import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { IProject } from '../models/project';
import { portfolioUrl } from '../utils/baseUrl';

@Injectable({
  providedIn: 'root',
})
export class PortfolioService {
  constructor(private http: HttpClient) {}

  getProjects(): Observable<IProject[]> {
    return this.http.get<IProject[]>(portfolioUrl + '/project/?per_page=100');
  }

  getProject(id: number): Observable<IProject> {
    return this.http.get<IProject>(portfolioUrl + '/project/' + id);
  }
}
