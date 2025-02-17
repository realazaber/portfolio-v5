import { Component, Input, OnInit } from '@angular/core';
import { ITestimonial } from '../../models/testimonial';
import { EasyUIModule } from '@azaber/ngeasy-ui';

@Component({
  selector: 'app-testimonial-card',
  standalone: true,
  imports: [EasyUIModule],
  templateUrl: './testimonial.component.html',
  styles: ``,
  schemas: [],
})
export class TestimonialCardComponent implements OnInit {
  @Input() cardIndex: number = {} as number;
  @Input() testimonial: ITestimonial = {} as ITestimonial;
  @Input() length: number = {} as number;
  backNum: number = {} as number;
  nextNum: number = {} as number;

  ngOnInit(): void {
    this.backNum = this.cardIndex - 1;
    this.nextNum = this.cardIndex + 1;
  }

  goToSlide(slideNum: number, event: Event) {
    event.preventDefault(); // Prevent default anchor scrolling
    document
      .getElementById(`slide${slideNum}`)
      ?.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
  }
}
