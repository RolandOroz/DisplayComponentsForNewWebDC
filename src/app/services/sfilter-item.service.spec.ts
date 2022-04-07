import { TestBed } from '@angular/core/testing';

import { SFilterItemService } from './sfilter-item.service';

describe('SFilterItemService', () => {
  let service: SFilterItemService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SFilterItemService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
