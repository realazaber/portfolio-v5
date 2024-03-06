import { NgModule } from '@angular/core';
import { DesktopnavComponent } from './nav/nav.component';
import { FooterComponent } from './footer/footer.component';
import { MobileNavComponent } from './mobile-nav/mobile-nav.component';

@NgModule({
  imports: [DesktopnavComponent, MobileNavComponent, FooterComponent],
  exports: [DesktopnavComponent, MobileNavComponent, FooterComponent],
})
export class NavigationModule {}
