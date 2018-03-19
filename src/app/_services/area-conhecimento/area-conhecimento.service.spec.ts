import { TestBed, inject } from '@angular/core/testing';

import { AreaConhecimentoService } from './area-conhecimento.service';

describe('AreaConhecimentoService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [AreaConhecimentoService]
    });
  });

  it('should be created', inject([AreaConhecimentoService], (service: AreaConhecimentoService) => {
    expect(service).toBeTruthy();
  }));
});
