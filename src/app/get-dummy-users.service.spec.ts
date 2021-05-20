import { TestBed } from '@angular/core/testing';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import {HttpClientModule} from '@angular/common/http';
import { MatMenuModule} from '@angular/material/menu';

import { GetDummyUsersService } from './get-dummy-users.service';

describe('GetDummyUsersService', () => {
  let service: GetDummyUsersService;

  beforeEach(() => {
    TestBed.configureTestingModule({
        imports: [HttpClientTestingModule],
        providers: [GetDummyUsersService]
    });
    service = TestBed.inject(GetDummyUsersService);

  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
