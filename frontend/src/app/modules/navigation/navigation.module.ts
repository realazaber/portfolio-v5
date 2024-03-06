import { NgModule } from '@angular/core';
import { DesktopnavComponent } from './nav/nav.component';
import { FooterComponent } from './footer/footer.component';

@NgModule({
  imports: [DesktopnavComponent, FooterComponent],
  exports: [DesktopnavComponent, FooterComponent],
})
export class NavigationModule {}
