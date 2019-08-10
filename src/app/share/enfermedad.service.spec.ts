import { TestBed } from '@angular/core/testing';

import { EnfermedadService } from './enfermedad.service';

describe('EnfermedadService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: EnfermedadService = TestBed.get(EnfermedadService);
    expect(service).toBeTruthy();
  });
});
