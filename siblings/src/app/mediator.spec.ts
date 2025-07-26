import { TestBed } from '@angular/core/testing';

import { MediatorService } from './mediator';

describe('Mediator', () => {
  let service: MediatorService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(MediatorService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
