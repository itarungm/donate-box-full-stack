import { TestBed } from '@angular/core/testing';

import { RazorPayService } from './razor-pay.service';

describe('RazorPayService', () => {
  let service: RazorPayService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(RazorPayService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
