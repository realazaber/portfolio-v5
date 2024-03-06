import { Injectable } from '@angular/core';
import { portfolioUrl } from '../utils/baseUrl';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { IExperience } from '../models/experience';

@Injectable({
  providedIn: 'root',
})
export class ExperienceService {
  constructor(private http: HttpClient) {}

  getExperiences(): Observable<IExperience[]> {
    return this.http.get<IExperience[]>(portfolioUrl + '/experience');
  }

  getExperience(id: number): Observable<IExperience> {
    return this.http.get<IExperience>(portfolioUrl + '/experience/' + id);
  }
}
