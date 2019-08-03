import { TestBed } from '@angular/core/testing';

import { ActividadesFisicasService } from './actividades-fisicas.service';

describe('ActividadesFisicasService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: ActividadesFisicasService = TestBed.get(ActividadesFisicasService);
    expect(service).toBeTruthy();
  });
});
