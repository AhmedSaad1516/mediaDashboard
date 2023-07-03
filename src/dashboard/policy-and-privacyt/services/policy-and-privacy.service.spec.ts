import { TestBed } from '@angular/core/testing';

import { PolicyAndPrivacyService } from './policy-and-privacy.service';

describe('PolicyAndPrivacyService', () => {
  let service: PolicyAndPrivacyService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(PolicyAndPrivacyService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
