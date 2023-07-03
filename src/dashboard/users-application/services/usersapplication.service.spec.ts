import { TestBed } from '@angular/core/testing';

import { UsersapplicationService } from './usersapplication.service';

describe('UsersapplicationService', () => {
  let service: UsersapplicationService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(UsersapplicationService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
