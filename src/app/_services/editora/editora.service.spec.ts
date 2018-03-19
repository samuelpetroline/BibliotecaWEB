import { TestBed, inject } from '@angular/core/testing';

import { EditoraService } from './editora.service';

describe('EditoraService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [EditoraService]
    });
  });

  it('should be created', inject([EditoraService], (service: EditoraService) => {
    expect(service).toBeTruthy();
  }));
});
