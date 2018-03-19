import { TestBed, inject } from '@angular/core/testing';

import { ExemplarService } from './exemplar.service';

describe('ExemplarService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [ExemplarService]
    });
  });

  it('should be created', inject([ExemplarService], (service: ExemplarService) => {
    expect(service).toBeTruthy();
  }));
});
