import { Injectable } from '@angular/core';
import { ITestimonial } from '../models/testimonial';
import { HttpClient } from '@angular/common/http';
import { portfolioUrl } from '../utils/baseUrl';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class TestimonialService {
  constructor(private http: HttpClient) {}

  getTestimonials(): Observable<ITestimonial[]> {
    return this.http.get<ITestimonial[]>(portfolioUrl + '/testimonial');
  }
}
