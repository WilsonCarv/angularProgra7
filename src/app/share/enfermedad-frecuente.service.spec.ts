import { TestBed } from '@angular/core/testing';

import { EnfermedadFrecuenteService } from './enfermedad-frecuente.service';

describe('EnfermedadFrecuenteService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: EnfermedadFrecuenteService = TestBed.get(EnfermedadFrecuenteService);
    expect(service).toBeTruthy();
  });
});
