import { Component, Input } from '@angular/core';
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
export class TestimonialCardComponent {
  @Input() testimonial: ITestimonial | null = null;
}
