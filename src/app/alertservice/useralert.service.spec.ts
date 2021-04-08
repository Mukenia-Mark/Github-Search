import { TestBed } from '@angular/core/testing';

import { UseralertService } from './useralert.service';

describe('UseralertService', () => {
  let service: UseralertService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(UseralertService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
