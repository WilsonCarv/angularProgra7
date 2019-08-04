import { TestBed } from '@angular/core/testing';

import { ExpedienteServiceService } from './expediente-service.service';

describe('ExpedienteServiceService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: ExpedienteServiceService = TestBed.get(ExpedienteServiceService);
    expect(service).toBeTruthy();
  });
});
