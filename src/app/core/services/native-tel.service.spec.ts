import { TestBed } from '@angular/core/testing';

import { NativeTelService } from './native-tel.service';

describe('NativeTelService', () => {
  let service: NativeTelService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(NativeTelService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
