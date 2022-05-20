import { TestBed } from '@angular/core/testing';

import { AllowModifGuard } from './allow-modif.guard';

describe('AllowModifGuard', () => {
  let guard: AllowModifGuard;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    guard = TestBed.inject(AllowModifGuard);
  });

  it('should be created', () => {
    expect(guard).toBeTruthy();
  });
});
