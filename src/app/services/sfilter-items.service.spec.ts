import { TestBed } from '@angular/core/testing';

import { SFilterItemsService } from './sfilter-items.service';

describe('SFilterItemsService', () => {
  let service: SFilterItemsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SFilterItemsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
