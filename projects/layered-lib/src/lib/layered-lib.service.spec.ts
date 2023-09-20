import { TestBed } from '@angular/core/testing';

import { LayeredLibService } from './layered-lib.service';

describe('LayeredLibService', () => {
  let service: LayeredLibService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(LayeredLibService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
