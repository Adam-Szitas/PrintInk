import { TestBed } from '@angular/core/testing';

import { ToggleContactsService } from './toggle-contacts.service';

describe('ToggleContactsService', () => {
  let service: ToggleContactsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ToggleContactsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
