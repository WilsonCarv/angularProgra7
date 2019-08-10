import { TestBed } from '@angular/core/testing';

import { EnfermedadfamiliarService } from './enfermedadfamiliar.service';

describe('EnfermedadfamiliarService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: EnfermedadfamiliarService = TestBed.get(EnfermedadfamiliarService);
    expect(service).toBeTruthy();
  });
});
