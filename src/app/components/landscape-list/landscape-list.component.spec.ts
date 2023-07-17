import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LandscapeListComponent } from './landscape-list.component';

describe('LandscapeListComponent', () => {
  let component: LandscapeListComponent;
  let fixture: ComponentFixture<LandscapeListComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [LandscapeListComponent]
    });
    fixture = TestBed.createComponent(LandscapeListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
