import { TestBed } from '@angular/core/testing';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import {HttpClientModule} from '@angular/common/http';
import { MatMenuModule} from '@angular/material/menu';

import { AccountService } from './account.service';

describe('GetDummyUsersService', () => {
  let service: AccountService;

  beforeEach(() => {
    TestBed.configureTestingModule({
        imports: [HttpClientTestingModule],
        providers: [AccountService]
    });
    service = TestBed.inject(AccountService);

  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
