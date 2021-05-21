import { TestBed } from '@angular/core/testing';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import {HttpClientModule} from '@angular/common/http';
import { MatMenuModule} from '@angular/material/menu';

import { Account } from './account';

describe('GetDummyUsersService', () => {
  let service: Account;

  beforeEach(() => {
    TestBed.configureTestingModule({
        imports: [HttpClientTestingModule],
        providers: [Account]
    });
    service = TestBed.inject(Account);

  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
