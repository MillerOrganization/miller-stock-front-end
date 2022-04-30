import { TestBed } from '@angular/core/testing';

import { PlaquesConsommablesService } from './plaques-consommables.service';

describe('PlaquesConsommablesService', () => {
  let service: PlaquesConsommablesService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(PlaquesConsommablesService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
