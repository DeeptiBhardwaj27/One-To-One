import { TestBed } from '@angular/core/testing';

import { PersonOne2OneserviceService } from './person-one2-oneservice.service';

describe('PersonOne2OneserviceService', () => {
  let service: PersonOne2OneserviceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(PersonOne2OneserviceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
