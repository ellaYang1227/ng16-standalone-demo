import { TestBed } from '@angular/core/testing';

import { LandscapesService } from './landscapes.service';

describe('LandscapesService', () => {
  let service: LandscapesService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(LandscapesService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
