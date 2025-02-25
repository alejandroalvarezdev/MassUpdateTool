import { TestBed } from '@angular/core/testing';

import { EstimacionesMaperService } from './estimaciones-maper.service';

describe('EstimacionesMaperService', () => {
  let service: EstimacionesMaperService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(EstimacionesMaperService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
