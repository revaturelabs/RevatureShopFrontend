import { TestBed } from '@angular/core/testing';

import { GetDummyUsersService } from './get-dummy-users.service';

describe('GetDummyUsersService', () => {
  let service: GetDummyUsersService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(GetDummyUsersService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
