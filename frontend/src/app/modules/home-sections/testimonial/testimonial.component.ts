import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EasyUIModule } from '@azaber/ngeasy-ui';
import { TestimonialService } from '../../../services/testimonial.service';
import { ITestimonial } from '../../../models/testimonial';
import { TestimonialCardComponent } from '../../../components/testimonial/testimonial.component';

@Component({
  selector: 'app-testimonial',
  standalone: true,
  imports: [CommonModule, EasyUIModule, TestimonialCardComponent],
  templateUrl: './testimonial.component.html',
  styleUrl: './testimonial.component.scss',
  schemas: [],
})
export class TestimonialComponent implements OnInit {
  testimonials: ITestimonial[] = [];

  constructor(private testiService: TestimonialService) {}

  ngOnInit(): void {
    this.testiService.getTestimonials().subscribe((data: ITestimonial[]) => {
      this.testimonials = data;
    });
  }
}
