import { TestBed } from '@angular/core/testing';

import { MenuBarServiceService } from './menu-bar-service.service';

describe('MenuBarServiceService', () => {
  let service: MenuBarServiceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(MenuBarServiceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
