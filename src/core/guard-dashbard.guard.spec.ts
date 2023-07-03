import { TestBed } from '@angular/core/testing';

import { GuardDashbardGuard } from './guard-dashbard.guard';

describe('GuardDashbardGuard', () => {
  let guard: GuardDashbardGuard;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    guard = TestBed.inject(GuardDashbardGuard);
  });

  it('should be created', () => {
    expect(guard).toBeTruthy();
  });
});
