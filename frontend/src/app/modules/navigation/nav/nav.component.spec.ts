import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DesktopnavComponent } from './nav.component';

describe('NavComponent', () => {
  let component: DesktopnavComponent;
  let fixture: ComponentFixture<DesktopnavComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DesktopnavComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(DesktopnavComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
