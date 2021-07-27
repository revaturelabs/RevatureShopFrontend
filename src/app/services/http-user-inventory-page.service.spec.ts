import { TestBed } from '@angular/core/testing';

import { HttpUserInventoryPageService } from './http-user-inventory-page.service';

describe('HttpUserInventoryPageService', () => {
  let service: HttpUserInventoryPageService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(HttpUserInventoryPageService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
