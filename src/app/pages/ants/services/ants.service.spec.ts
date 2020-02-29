import { TestBed } from '@angular/core/testing';

import { AntsService } from './ants.service';

describe('AntsService', () => {
  let service: AntsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AntsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
