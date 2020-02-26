import { TestBed } from '@angular/core/testing';

import { CheckJsonGuard } from './check-json.guard';

describe('CheckJsonGuard', () => {
  let guard: CheckJsonGuard;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    guard = TestBed.inject(CheckJsonGuard);
  });

  it('should be created', () => {
    expect(guard).toBeTruthy();
  });
});
