import { TestBed } from '@angular/core/testing';

import { AdminAddPointsService } from './admin-add-points.service';

describe('AdminAddPointsService', () => {
  let service: AdminAddPointsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AdminAddPointsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
