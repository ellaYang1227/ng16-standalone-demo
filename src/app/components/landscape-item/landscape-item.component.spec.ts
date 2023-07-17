import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LandscapeItemComponent } from './landscape-item.component';

describe('LandscapeItemComponent', () => {
  let component: LandscapeItemComponent;
  let fixture: ComponentFixture<LandscapeItemComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [LandscapeItemComponent]
    });
    fixture = TestBed.createComponent(LandscapeItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
