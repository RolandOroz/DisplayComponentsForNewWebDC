import { TestBed } from '@angular/core/testing';

import { DatePickerDataService } from './date-picker-data.service';

describe('DatePickerDataService', () => {
  let service: DatePickerDataService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(DatePickerDataService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
