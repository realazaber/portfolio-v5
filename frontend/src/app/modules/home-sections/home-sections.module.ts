import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeroComponent } from './hero/hero.component';
import { AboutComponent } from './about/about.component';
import { PortfolioComponent } from './portfolio/portfolio.component';
import { TestimonialComponent } from './testimonial/testimonial.component';
import { BlogComponent } from './blog/blog.component';
import { ContactComponent } from './contact/contact.component';
import { ExperienceComponent } from './experience/experience.component';

@NgModule({
  imports: [
    HeroComponent,
    AboutComponent,
    ExperienceComponent,
    PortfolioComponent,
    TestimonialComponent,
    BlogComponent,
    ContactComponent,
  ],
  exports: [
    HeroComponent,
    AboutComponent,
    ExperienceComponent,
    PortfolioComponent,
    TestimonialComponent,
    BlogComponent,
    ContactComponent,
  ],
})
export class HomeSectionsModule {}
