import { TestBed } from '@angular/core/testing';

import { AddopinionService } from './addopinion.service';

describe('AddopinionService', () => {
  let service: AddopinionService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AddopinionService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
