import { TestBed } from '@angular/core/testing';

import { AllowLoginGuard } from './allow-login.guard';

describe('AllowLoginGuard', () => {
  let guard: AllowLoginGuard;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    guard = TestBed.inject(AllowLoginGuard);
  });

  it('should be created', () => {
    expect(guard).toBeTruthy();
  });
});
